export const name="range_hood-fill";
export const id="dl_ad6f4915d92d2bf8e9f4";
export const url=new URL("../icons/range_hood-fill.svg?v=51d4aeb2b199bcc982782ca6da19ae795276694ec3a2ae49bdc279b38be401d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
