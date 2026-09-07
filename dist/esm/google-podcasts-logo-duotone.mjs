export const name="google-podcasts-logo-duotone";
export const id="dl_72a4426a9d564a10bf23";
export const url=new URL("../icons/google-podcasts-logo-duotone.svg?v=54f55e71be359d8c5cd68c7ef62c2d184f42178455c656aa3634bcb63f71ae1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
