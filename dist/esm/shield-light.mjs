export const name="shield-light";
export const id="dl_c8ebe95f44761bfe55a4";
export const url=new URL("../icons/shield-light.svg?v=05d93c5ef80c5c6d0109dbd43a85ce8a1530b9c03be98b9268febf289a97c305",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
