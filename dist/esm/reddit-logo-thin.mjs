export const name="reddit-logo-thin";
export const id="dl_edadc7b2b3bd411da2fc";
export const url=new URL("../icons/reddit-logo-thin.svg?v=233cf5a31eb30206d9590eeaf6a299f3b77c5065b798f0a0336fb6f80c91d307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
