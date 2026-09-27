export const name="texture_minus-fill";
export const id="dl_a352fad522fe71d13fcc";
export const url=new URL("../icons/texture_minus-fill.svg?v=0983fd5fa88f96b87a06dd3db4d4e84bd7ac4395e7b8fd4bd44e0cef5f2977d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
