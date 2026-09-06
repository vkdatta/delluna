export const name="arrows-in-simple-light";
export const id="dl_72af05eb6aac4e25ab69";
export const url=new URL("../icons/arrows-in-simple-light.svg?v=be901d0e3c1f626634e6c67e5e5d3faa81f9b5c628d21aee954709dce263e6c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
