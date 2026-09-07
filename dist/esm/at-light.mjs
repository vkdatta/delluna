export const name="at-light";
export const id="dl_4d67ffc32d7c47588482";
export const url=new URL("../icons/at-light.svg?v=03377bcc3d252fd12eaffc714f095e1c2d726a632b3fb7aec42004863047b4a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
