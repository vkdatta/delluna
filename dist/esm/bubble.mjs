export const name="bubble";
export const id="dl_dba61eea79d506d2dfbc";
export const url=new URL("../icons/bubble.svg?v=6d51310a26bccfaf11a988468bfcece21bd4173bbbfda3dfe75579776fbdc8fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
