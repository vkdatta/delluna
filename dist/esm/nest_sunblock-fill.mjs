export const name="nest_sunblock-fill";
export const id="dl_098c5bdf0d5d492b9922";
export const url=new URL("../icons/N/nest_sunblock-fill.svg?v=efa61315ade1c2791f04bf6ebcd8c7e86c534481a7fbd7be6db7a4c40c6efa4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
