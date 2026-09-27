export const name="finn-the-human-thin";
export const id="dl_efcdad03fa9a4cd688c0";
export const url=new URL("../icons/finn-the-human-thin.svg?v=941828a9753d2b4a457169127ec7e2e4356df09a29a751adb6750f4797009225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
