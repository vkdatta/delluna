export const name="tent-duotone";
export const id="dl_73817f5b89f0170994a6";
export const url=new URL("../icons/tent-duotone.svg?v=c192dbbfbb1c82f453c7db36a697c8e21a955d9787df91250166f972bf9fe12c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
