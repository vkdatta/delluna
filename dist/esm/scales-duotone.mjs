export const name="scales-duotone";
export const id="dl_78faee3498c7a7deddfa";
export const url=new URL("../icons/scales-duotone.svg?v=e31256959626a331a7949762141f67020126347e9421c66f04ed696b008002b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
