export const name="lucid_3-nfc";
export const id="dl_5178c849b83044f18069";
export const url=new URL("../icons/lucid_3-nfc.svg?v=0468dcdbd5b39371d88d80fd5a4a9f03b880a03d4b662ca65063c379fd996e0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
