export const name="encrypted";
export const id="dl_f79be6f6ae07eea91725";
export const url=new URL("../icons/encrypted.svg?v=e440c31827375c7517c680203cbd92e89c6cb6206f9950e6158c5ff0e43767d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
