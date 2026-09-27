export const name="folder-simple-thin";
export const id="dl_0193871c846a44bdbac2";
export const url=new URL("../icons/folder-simple-thin.svg?v=6cf70968c2f7eabbf21fe5adab4b48ccd40479a8435451d1282926fe990ca1aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
