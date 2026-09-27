export const name="face_4-fill";
export const id="dl_583c6fca5f9e05113dd6";
export const url=new URL("../icons/face_4-fill.svg?v=2b8bee37bb9013ea5257b71cdb0a6c7c08fa7b9263d19660aa142d1d170482c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
