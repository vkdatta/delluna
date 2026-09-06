export const name="alien-fill";
export const id="dl_815b2d45c4cd4276812a";
export const url=new URL("../icons/alien-fill.svg?v=42ca0d1c01352a0e0bc463d619e7eaba1b6dcf642915b0fd57d4124b1562f9bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
