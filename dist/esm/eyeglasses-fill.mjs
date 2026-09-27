export const name="eyeglasses-fill";
export const id="dl_3246d5c9f07945a68156";
export const url=new URL("../icons/eyeglasses-fill.svg?v=9c100f767a51ca1ab4b2f0189288ee1ff416189e6469a08d56ab898250078456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
