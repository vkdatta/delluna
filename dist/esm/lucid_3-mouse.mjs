export const name="lucid_3-mouse";
export const id="dl_29756c43294249349af0";
export const url=new URL("../icons/lucid_3-mouse.svg?v=4b087478b7909200d10aa53aa47586546b678aeda2fb3cfabfe460f0f767d95d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
