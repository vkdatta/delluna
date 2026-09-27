export const name="public_off-fill";
export const id="dl_531ef3266305d8f7a1cf";
export const url=new URL("../icons/public_off-fill.svg?v=142a2334fb26a882bb0a56bc620435598da3ee950756f96188fdf82b98ec82b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
