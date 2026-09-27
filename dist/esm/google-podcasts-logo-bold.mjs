export const name="google-podcasts-logo-bold";
export const id="dl_f5922202b6fa45d0b640";
export const url=new URL("../icons/google-podcasts-logo-bold.svg?v=da815f3d3f72acae4f122b4b0d5eb4339f21a457f77ae9b734c47101106f13c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
