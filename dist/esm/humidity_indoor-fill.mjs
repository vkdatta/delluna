export const name="humidity_indoor-fill";
export const id="dl_499d52c13b1aebbaf930";
export const url=new URL("../icons/humidity_indoor-fill.svg?v=1826421ab4b65a443a6e4c7fc9804a2747f3dbe3f60a8937b73d26e6950c3113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
