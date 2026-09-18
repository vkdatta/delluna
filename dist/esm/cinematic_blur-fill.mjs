export const name="cinematic_blur-fill";
export const id="dl_7d735a407f2147288718";
export const url=new URL("../icons/cinematic_blur-fill.svg?v=cb8afd019d031f8e7fa02916d6d30e70e7bed6490f12311549907fc38bc34a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
