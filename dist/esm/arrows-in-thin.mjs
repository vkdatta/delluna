export const name="arrows-in-thin";
export const id="dl_04d5d06758ee42c98c8e";
export const url=new URL("../icons/arrows-in-thin.svg?v=03096b1527c8b5c48e5a978c789fbcdb9cd7004d506ec3aa35fe5b13102d21c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
