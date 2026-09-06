export const name="dev-to-logo-light";
export const id="dl_f018336d920144779794";
export const url=new URL("../icons/dev-to-logo-light.svg?v=775b2f4be65426244ee288acd76d115dd4b8f08c361c4b775a6c7ad353086328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
