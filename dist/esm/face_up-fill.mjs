export const name="face_up-fill";
export const id="dl_8f816ddea0399ce4e0cf";
export const url=new URL("../icons/face_up-fill.svg?v=0483443ad50869293812a144e7d39b3f0e2a4a82f3fde8fb99c7a296be0b2e44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
