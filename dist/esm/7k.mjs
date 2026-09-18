export const name="7k";
export const id="dl_3e0578ea49f44a6a8113";
export const url=new URL("../icons/7k.svg?v=22ecb14da818465e731816c223b9885d302f27e470678bf1e3d94cb184635850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
