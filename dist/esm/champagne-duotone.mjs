export const name="champagne-duotone";
export const id="dl_3e19508a9c2641ad8f4e";
export const url=new URL("../icons/champagne-duotone.svg?v=b6338cd33d5c55fd15617eac51e9104469af2942c786acade21a6a80616db20a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
