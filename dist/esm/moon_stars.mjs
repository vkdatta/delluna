export const name="moon_stars";
export const id="dl_dbd077938a26daa4cb73";
export const url=new URL("../icons/moon_stars.svg?v=6e584976e62888ddd1bfc6bd5236315eeee32e414f801db17ac4d945e496b672",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
