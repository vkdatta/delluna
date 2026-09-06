export const name="google-podcasts-logo-light";
export const id="dl_98fd7c42283e456fa452";
export const url=new URL("../icons/google-podcasts-logo-light.svg?v=c1501d1c01391bd51b82ab838a5c3f12c40f977fc82b5aba20526c445b07f546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
