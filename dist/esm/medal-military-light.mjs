export const name="medal-military-light";
export const id="dl_2163b1fd6cb645ff8e59";
export const url=new URL("../icons/medal-military-light.svg?v=860e7ca589c2bb3e56456863119cffcbe98d262e2116ad802983d320c25596bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
