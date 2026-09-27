export const name="radio-thin";
export const id="dl_f01912c3e3b649e58429";
export const url=new URL("../icons/radio-thin.svg?v=dd11ba1dd3a88192706677e0c14432610188ab4042587d42b5c650ccb51c966b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
