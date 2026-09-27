export const name="cassette-tape";
export const id="dl_5fb7052062fb4de8b6e5";
export const url=new URL("../icons/cassette-tape.svg?v=735498b7d1197a8675db17ea4fce75d446c888b2b96f25808f6c5d1868c3ad31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
