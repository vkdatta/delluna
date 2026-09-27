export const name="privacy";
export const id="dl_d4fd08ac9cc1a05c2487";
export const url=new URL("../icons/privacy.svg?v=4d2d87e24cc8ec9ff387527977a9d53b387048c821a476ad95b3e83dec3797d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
