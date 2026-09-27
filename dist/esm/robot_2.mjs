export const name="robot_2";
export const id="dl_c3e87c2b72b3de288b04";
export const url=new URL("../icons/robot_2.svg?v=1ada7f6b9cb0a7dafd88c920b086fbae1ac4f1d77d3180fe40cd3dc05225834c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
