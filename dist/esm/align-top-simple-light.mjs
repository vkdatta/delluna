export const name="align-top-simple-light";
export const id="dl_524eda9f09e142be9948";
export const url=new URL("../icons/align-top-simple-light.svg?v=0f07d21e855958890984430d2dad574fbd924217681486ae191fbfc3f02eebd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
