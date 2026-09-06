export const name="faders-horizontal-thin";
export const id="dl_dbb29531bd5943f08fa6";
export const url=new URL("../icons/faders-horizontal-thin.svg?v=022c3e48deb806419cf2d4a65fbe653f6dcf3c99ae99adab36ed657ce6cb1bc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
