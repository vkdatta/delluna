export const name="flying-saucer-bold";
export const id="dl_21f3e9b330084cebab3a";
export const url=new URL("../icons/flying-saucer-bold.svg?v=5e8686c828b0165cb14e7cf3b3493b77e63618de5d22b882b97b7f196cedaa08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
