export const name="lucid_3-mouse-pointer-2-off";
export const id="dl_de8233360b2b4c34b250";
export const url=new URL("../icons/lucid_3-mouse-pointer-2-off.svg?v=186679a226b413fdd0ec317626e36bb5b430a1b2ec270478f8bbe25dd28b67ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
