export const name="bone-bold";
export const id="dl_6bc186d81ab447df9759";
export const url=new URL("../icons/bone-bold.svg?v=3c02fe4aa059ec1fb8eb0cdac71372e1894079c04925aa2b37f399940dbd02de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
