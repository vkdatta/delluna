export const name="battery_change";
export const id="dl_9fdfb51e9a5dd7d109c7";
export const url=new URL("../icons/battery_change.svg?v=a543227a26384764268b1a08272d21890c08bba006876086c8b95fa4c80c1e33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
