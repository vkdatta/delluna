export const name="mode_fan_2";
export const id="dl_2d0eb441c2f2ee378e62";
export const url=new URL("../icons/mode_fan_2.svg?v=bd3dcab56916c13afd6fd61cbdb3f69502ced099164ae602178cf785604d7504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
