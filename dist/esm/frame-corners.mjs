export const name="frame-corners";
export const id="dl_06d72f8396aa4f758d48";
export const url=new URL("../icons/frame-corners.svg?v=270a754b49a235cc9d10144eeb1123eb55a8412d8dde26defbaeb685def1e53a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
