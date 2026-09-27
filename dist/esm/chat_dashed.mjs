export const name="chat_dashed";
export const id="dl_a802c6ef3a7302b62513";
export const url=new URL("../icons/chat_dashed.svg?v=0e998812a17d2c628b031af5393cde66503b1417eff9a19c4f87decfa241fec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
