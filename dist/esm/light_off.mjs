export const name="light_off";
export const id="dl_a83c7887c4d45314126b";
export const url=new URL("../icons/light_off.svg?v=89f564caf63625a68f510e7ebfde643d0590f14334f79a94d4afc95729f153b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
