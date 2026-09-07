export const name="tip-jar-bold";
export const id="dl_60f21d453d7b4cb0ad52";
export const url=new URL("../icons/T/tip-jar-bold.svg?v=d144aa9c24ef4e9cd3a452fa0e643795b4e52e0728d80feafdf0b46b71c008ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
