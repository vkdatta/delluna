export const name="stool-fill";
export const id="dl_853b30c7690335eee19c";
export const url=new URL("../icons/stool-fill.svg?v=4cc41325ad78d56dd213eb01680a6075fa6ba2452735e9f643b726167955f943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
