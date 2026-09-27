export const name="push-pin-simple-slash-fill";
export const id="dl_d0a97b93b477427da963";
export const url=new URL("../icons/push-pin-simple-slash-fill.svg?v=96a284d2f8b8121f5a8401921e523e63370be776580d736438eeb0a8db0cbbf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
