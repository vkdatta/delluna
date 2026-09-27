export const name="user-circle-dashed-thin";
export const id="dl_7de0ae9fdbc606ee353f";
export const url=new URL("../icons/user-circle-dashed-thin.svg?v=8f7669b6c1c0b553d694ffddffec0bd4895e7e4d7c708c2a0caef9f6c1c12a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
