export const name="credit-card-thin";
export const id="dl_9491f9ec7308426c8ccf";
export const url=new URL("../icons/credit-card-thin.svg?v=c0dbbde40c9c15d9ad31099c3ed44ccab30b8d6af4a63f6b62145bb80cd54b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
