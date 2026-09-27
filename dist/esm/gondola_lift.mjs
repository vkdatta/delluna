export const name="gondola_lift";
export const id="dl_0bec168e37168e0e33b8";
export const url=new URL("../icons/gondola_lift.svg?v=9d322139f38e09884bebf86ff96061c350aa398829083f5468dc7f3d1e8b12ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
