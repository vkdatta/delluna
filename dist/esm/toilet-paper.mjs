export const name="toilet-paper";
export const id="dl_7fbe76526d9905bed1e7";
export const url=new URL("../icons/toilet-paper.svg?v=68dd5bc023122a10f04e1e178b76bf97f8fb7a8040aa1c5ef276859f95bb22cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
