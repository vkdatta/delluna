export const name="demography-fill";
export const id="dl_fb52d8eec45984905f4f";
export const url=new URL("../icons/demography-fill.svg?v=da3e8e1aaf75746e0c496486fcdd6b7ee600e10b49eba118f6b764f834a0b47f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
