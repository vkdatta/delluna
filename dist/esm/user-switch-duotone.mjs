export const name="user-switch-duotone";
export const id="dl_f54b0b0369d84e33c0ad";
export const url=new URL("../icons/user-switch-duotone.svg?v=d64c28a30185fc68b336790be4c02575a647a14a59eddabc42d6bc929f7ec1d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
