export const name="confetti-light";
export const id="dl_28eeb3bfa2d14b24a3d3";
export const url=new URL("../icons/confetti-light.svg?v=8e9ed330ccbbb28d657d3b8f899334e3f8cf171863cf376f9d2f5ffd17217a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
