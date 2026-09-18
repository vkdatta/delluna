export const name="light_off";
export const id="dl_c8fcf9bd545d4e2aaafd";
export const url=new URL("../icons/L/light_off.svg?v=b166fb66affb3d898bdb39664ee9f765e5983f00d424175871167b3bcd31cf2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
