export const name="drop-thin";
export const id="dl_8502658fc6c443a2bcdb";
export const url=new URL("../icons/drop-thin.svg?v=a4395f8cd6d70fab3fbf95938cbe4384c0dc98ed1d2367f3fb463899ee1818b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
