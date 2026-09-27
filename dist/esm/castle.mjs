export const name="castle";
export const id="dl_8508e5811073861dbdb2";
export const url=new URL("../icons/castle.svg?v=8487c1010349fe32885eb80dd829ba4e8d6310a6889f0f1c48a0cdbb8e7db3a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
