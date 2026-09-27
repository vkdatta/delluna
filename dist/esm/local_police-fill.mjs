export const name="local_police-fill";
export const id="dl_0d38a770b9371e966e4f";
export const url=new URL("../icons/local_police-fill.svg?v=906372dfd8563a44239727f870f7f1df7cca3c7b128780f205e52bc1db0ba211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
