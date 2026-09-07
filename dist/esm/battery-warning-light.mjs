export const name="battery-warning-light";
export const id="dl_cf5c3642f8164cfe8da2";
export const url=new URL("../icons/battery-warning-light.svg?v=ebc13108c1ec2d82ed14f4868af6b07abe0d56bd6afc460acb983d29103e9eab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
