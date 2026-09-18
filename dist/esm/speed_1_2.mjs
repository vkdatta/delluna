export const name="speed_1_2";
export const id="dl_a5799a250b0540bf91fc";
export const url=new URL("../icons/speed_1_2.svg?v=87951952a495860960af34e52f7ffa4cd21a2d2a6f1cf9ccef3a118c08e82a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
