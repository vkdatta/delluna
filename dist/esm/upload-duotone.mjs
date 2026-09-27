export const name="upload-duotone";
export const id="dl_2b848a3fff90012cac06";
export const url=new URL("../icons/upload-duotone.svg?v=23598ebe400ecc9b21456747bec3a8107b71d740a799ca77122498ae8429c4a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
