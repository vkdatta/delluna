export const name="pen-nib-thin";
export const id="dl_1c580d90840644eb9148";
export const url=new URL("../icons/pen-nib-thin.svg?v=a42baa0d6b68cb6a90fe1d79c76f24c6792a6526cd3b95124218e92d2aa70b3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
