export const name="subwoofer";
export const id="dl_b633a71c1500480aa9df";
export const url=new URL("../icons/S/subwoofer.svg?v=7775dfe836a2023c4ebf25895bde1a3d10553aee57d978eaee55a4af4e4ff039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
