export const name="sidebar-bold";
export const id="dl_0a4c4fb3d2cfdde8718e";
export const url=new URL("../icons/sidebar-bold.svg?v=8f2680c32aa550f4ad49e8ee7792d7d21dff597d8a4aa3e7fa8fb0cd5b51d870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
