export const name="face_shake";
export const id="dl_e593d8e28491dae0be8f";
export const url=new URL("../icons/face_shake.svg?v=cda9302aaea85d4e4ca7e35aad95716acfec281570db2ff262cadc565d078fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
