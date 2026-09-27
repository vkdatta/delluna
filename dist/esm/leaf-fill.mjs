export const name="leaf-fill";
export const id="dl_96e59f2630ca4f8a975c";
export const url=new URL("../icons/leaf-fill.svg?v=59a333fba31b41f31d2f7dd198931c17b093ab42eff5b29472e3a3ecb3947e39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
