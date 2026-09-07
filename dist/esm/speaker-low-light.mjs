export const name="speaker-low-light";
export const id="dl_311b0386e88e474683c8";
export const url=new URL("../icons/S/speaker-low-light.svg?v=89361cf09e330c07817d67ead60524a97355a5ceb273a230309ce277a54dbdfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
