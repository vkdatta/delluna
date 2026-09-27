export const name="arrows-in-simple-light";
export const id="dl_72af05eb6aac4e25ab69";
export const url=new URL("../icons/arrows-in-simple-light.svg?v=a799534952c023e7d3532165ef9278784b5128e0726027cb1e1226856ae7dad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
