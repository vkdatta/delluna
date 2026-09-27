export const name="google-podcasts-logo-duotone";
export const id="dl_72a4426a9d564a10bf23";
export const url=new URL("../icons/google-podcasts-logo-duotone.svg?v=887250f3be71fac16a8d12ca1873ae03ac316cc2e37554605efde0f295d683e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
