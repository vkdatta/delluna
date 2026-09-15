export const name="chromecast_2-fill";
export const id="dl_412f66cd842045cb93dd";
export const url=new URL("../icons/C/chromecast_2-fill.svg?v=7f246958bd8e108e6d25252747c874a6afe383eb68aaa2e3f8b243125e7aa745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
