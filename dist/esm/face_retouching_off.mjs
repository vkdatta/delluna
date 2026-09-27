export const name="face_retouching_off";
export const id="dl_218ce71d73bb17732a17";
export const url=new URL("../icons/face_retouching_off.svg?v=b948ba6ff123e25dff5e84bacb7be09f2adca3c1f280951c23f87983ffaeb593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
