export const name="lucid_3-maximize";
export const id="dl_023095573a1e4eca8591";
export const url=new URL("../icons/lucid_3-maximize.svg?v=f3582e421198925a89bb7f2ba8bc8543b9c78723e76b53605c72388ba4a0e832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
