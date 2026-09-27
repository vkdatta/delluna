export const name="engine-thin";
export const id="dl_a9a490150f194727b7c2";
export const url=new URL("../icons/engine-thin.svg?v=e9a9783268ae0f80ddb70bf5419c90dbe2d79a786b147f4b3887fc90f7ac79bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
