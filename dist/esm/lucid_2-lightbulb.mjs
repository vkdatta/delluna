export const name="lucid_2-lightbulb";
export const id="dl_7e4352b67eae48fb8ad5";
export const url=new URL("../icons/lucid_2-lightbulb.svg?v=c3ef0a7a690dd4fbf2fe6335a050075fca52e6a7dc3aedb4f9022cda441234b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
