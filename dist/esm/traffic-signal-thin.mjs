export const name="traffic-signal-thin";
export const id="dl_a48ec2c4368a3bb10fe1";
export const url=new URL("../icons/traffic-signal-thin.svg?v=165ac63a62e5f5804edb95fa29054fe3135207522db106d2a15d07571426450e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
