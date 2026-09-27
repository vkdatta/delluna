export const name="arrow-u-right-up-light";
export const id="dl_791b587d6e7642a481a1";
export const url=new URL("../icons/arrow-u-right-up-light.svg?v=139d2c96668954aed831ed044f4aff69c91ded4e40d634f3587ccb2f444f9b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
