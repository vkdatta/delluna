export const name="dice-one-light";
export const id="dl_ec61e488d1d945239a65";
export const url=new URL("../icons/dice-one-light.svg?v=a5839002a61c40c595dcdb3daf80d3843a8cd45fde043c267e47a9b5f867396d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
