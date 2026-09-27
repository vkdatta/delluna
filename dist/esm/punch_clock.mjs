export const name="punch_clock";
export const id="dl_e51b0c4b65798249b843";
export const url=new URL("../icons/punch_clock.svg?v=31a72f5859d75d157455700bf1a5f9a4771d6da0bcdde164d92f8425053d1e41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
