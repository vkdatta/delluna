export const name="lucid_3-plug-2";
export const id="dl_4fad767c14e14fa3bb40";
export const url=new URL("../icons/lucid_3-plug-2.svg?v=4b28abd3045398359f5634fe7e52b86634c12706eac43853c2f81f52840fcd77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
