export const name="eye-closed-light";
export const id="dl_0ec00bf83c5b467fba11";
export const url=new URL("../icons/eye-closed-light.svg?v=950d65fc968c00fc1eaf7f127eb4244a693312fa33288970156a02c8c135fcda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
