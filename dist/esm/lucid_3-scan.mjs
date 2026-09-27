export const name="lucid_3-scan";
export const id="dl_a1bc98aaf115437d83cb";
export const url=new URL("../icons/lucid_3-scan.svg?v=69aa60e9011032a5a270a09ef44f0bc1dc8edb366de113ef1f2e07060f9de249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
