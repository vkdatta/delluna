export const name="cassette-tape-fill";
export const id="dl_ec4e1b2c01174a4a96e0";
export const url=new URL("../icons/cassette-tape-fill.svg?v=ce600b631b6d398c6ef7c938ab08600f24af891c95bbaea37205b8bcc045d324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
