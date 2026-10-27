CREATE TABLE IF NOT EXISTS briefings (
 id TEXT PRIMARY KEY,
 company TEXT NOT NULL,
 contact_name TEXT NOT NULL,
 created_at TEXT NOT NULL,
 payload TEXT NOT NULL,
 summary TEXT NOT NULL,
 request_id TEXT NOT NULL UNIQUE
);
CREATE INDEX IF NOT EXISTS idx_briefings_created ON briefings(created_at DESC, id DESC);
CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires INTEGER NOT NULL);
