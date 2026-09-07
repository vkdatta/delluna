export const name="scales-duotone";
export const id="dl_ae9b9f8a8ef24d0e85d5";
export const url=new URL("../icons/S/scales-duotone.svg?v=e31256959626a331a7949762141f67020126347e9421c66f04ed696b008002b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
