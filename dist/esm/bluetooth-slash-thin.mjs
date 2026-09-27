export const name="bluetooth-slash-thin";
export const id="dl_c6277c66669a4cf7891a";
export const url=new URL("../icons/bluetooth-slash-thin.svg?v=9112167a81fc6251b3ff6019e2c65fc80cfa2693da51f1813a55b16d879bf6e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
