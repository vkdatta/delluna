export const name="stethoscope";
export const id="dl_f5c92c0111be2e4257ea";
export const url=new URL("../icons/stethoscope.svg?v=76085555014cf08ea54d924049bfdc59bd7981d32560e515ad2ef1a2eb66c3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
