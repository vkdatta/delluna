export const name="transform-fill";
export const id="dl_4cee0bd64e68248855e2";
export const url=new URL("../icons/transform-fill.svg?v=7720fe819587f6d361fe4e5caec32174e24e2f009961747c9cb37f61a2531461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
