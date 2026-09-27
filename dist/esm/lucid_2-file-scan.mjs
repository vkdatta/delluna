export const name="lucid_2-file-scan";
export const id="dl_25a004aa170040e3bd8a";
export const url=new URL("../icons/lucid_2-file-scan.svg?v=894973c597e42bc436fbc96bb65f4f9008bc6391ea4b64e55922d69a334160dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
