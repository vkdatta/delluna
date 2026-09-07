export const name="wifi-slash-light";
export const id="dl_07f2f44a227f4d2cb884";
export const url=new URL("../icons/W/wifi-slash-light.svg?v=448f89f4c9ca00195a89bc28ed3468984274c62f0fa56e70dd25fbb4eb2cd23d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
