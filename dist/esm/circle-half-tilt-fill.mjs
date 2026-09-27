export const name="circle-half-tilt-fill";
export const id="dl_c3c7ec06105b42bd9348";
export const url=new URL("../icons/circle-half-tilt-fill.svg?v=49a7ba5f69e65ec62507c746ee3f8a85562eb15b87a2316bd7f172f58f393749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
