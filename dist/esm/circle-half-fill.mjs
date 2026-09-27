export const name="circle-half-fill";
export const id="dl_facc00d979c449479104";
export const url=new URL("../icons/circle-half-fill.svg?v=b51ece233632077b525c3bb791a81a7df302051e275c252f24ced86204ba1b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
