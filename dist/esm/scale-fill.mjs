export const name="scale-fill";
export const id="dl_6814bcc4d7d8a413f01a";
export const url=new URL("../icons/scale-fill.svg?v=7b1db6077a1517ce44504d1cf77aaa9ca8f76b296cb32fcaeec10c2e191d1acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
