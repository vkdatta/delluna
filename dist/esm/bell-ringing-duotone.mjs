export const name="bell-ringing-duotone";
export const id="dl_bed497535e4b4ecaa4a3";
export const url=new URL("../icons/bell-ringing-duotone.svg?v=22ea9b7b70831da9b0726878e1620c1c30d232649d7f3e956633538ad38764d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
