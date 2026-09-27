export const name="google-podcasts-logo-duotone";
export const id="dl_72a4426a9d564a10bf23";
export const url=new URL("../icons/google-podcasts-logo-duotone.svg?v=9f33a9912738004f0fea7a30fcccd2dfde1cfbc80d7f9beb490a174ed63fad4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
