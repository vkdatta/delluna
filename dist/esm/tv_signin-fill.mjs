export const name="tv_signin-fill";
export const id="dl_0d871c494977473f3492";
export const url=new URL("../icons/tv_signin-fill.svg?v=c9848ef30891a1026e1c557836cd04a01f53523d18336c1d2a2e4090e03876e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
