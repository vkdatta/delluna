export const name="caret-circle-right-bold";
export const id="dl_28a2b55e8e82445a9313";
export const url=new URL("../icons/caret-circle-right-bold.svg?v=0ffb33b1f3bec24682cbe1173db6401869b975edd06f66ad2911007532d22599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
