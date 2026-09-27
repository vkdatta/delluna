export const name="dots-three-vertical-fill";
export const id="dl_c7329b2c456042b49081";
export const url=new URL("../icons/dots-three-vertical-fill.svg?v=2cae68de305571bcfc45f1ebe09980ffa655e7f0fbd17d97a23332ba06539868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
