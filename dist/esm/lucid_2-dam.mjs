export const name="lucid_2-dam";
export const id="dl_aa250b9f274e4fba82b9";
export const url=new URL("../icons/lucid_2-dam.svg?v=9404397477f966b64b065db430f225e70aa0c195c293c677da2fa5e70006ba83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
