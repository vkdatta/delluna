export const name="artist";
export const id="dl_aff250b98d37d19b9560";
export const url=new URL("../icons/artist.svg?v=d0d47571c3cfdf0ac79a15db944dcd2d52e0dab66d6b6116cb89e504d00dee8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
