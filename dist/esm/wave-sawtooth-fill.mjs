export const name="wave-sawtooth-fill";
export const id="dl_07706ed9203b4aad9d8a";
export const url=new URL("../icons/W/wave-sawtooth-fill.svg?v=05a942cc1a9e4a037756c60006ccba65abc714e39a1c195f5cb7779bcddc7c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
