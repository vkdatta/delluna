export const name="intersection-thin";
export const id="dl_0628287b3b074209a441";
export const url=new URL("../icons/intersection-thin.svg?v=d190db1ce6f63be4609017f3bb2acf781e2c0f645fc4120cce1c8a081ec6ebf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
