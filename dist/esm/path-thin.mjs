export const name="path-thin";
export const id="dl_30f8b6672b324b9fbc58";
export const url=new URL("../icons/path-thin.svg?v=a1108528de35fb699d5db2223c5086dc5b20b313e1768444eadc73a273475f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
