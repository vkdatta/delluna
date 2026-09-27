export const name="face_down";
export const id="dl_8a052400f4b5877ceef7";
export const url=new URL("../icons/face_down.svg?v=b1a9f8aa31e834bdd44b1a0800714c9bd6e40944a6a73929b7afa90336d77baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
