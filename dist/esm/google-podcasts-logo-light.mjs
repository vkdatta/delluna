export const name="google-podcasts-logo-light";
export const id="dl_98fd7c42283e456fa452";
export const url=new URL("../icons/google-podcasts-logo-light.svg?v=89ae33ca36e1f7da3eb400d84b92c85c7ae5bd08bc65d76784b4d1702692bfde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
