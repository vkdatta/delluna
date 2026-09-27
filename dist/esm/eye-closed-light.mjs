export const name="eye-closed-light";
export const id="dl_0ec00bf83c5b467fba11";
export const url=new URL("../icons/eye-closed-light.svg?v=2a17cc16c357bb51aa8b8a8cad1ab84d5137d4a7637dca054978405d7de5709f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
