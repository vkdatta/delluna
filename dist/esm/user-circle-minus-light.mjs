export const name="user-circle-minus-light";
export const id="dl_a76d42dc34c395ae686d";
export const url=new URL("../icons/user-circle-minus-light.svg?v=91e51a534ad35ad1db6a09eade16a5301537164fb37cfe255a72ef4c52ed3d9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
