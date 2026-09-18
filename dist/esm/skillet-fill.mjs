export const name="skillet-fill";
export const id="dl_97acc6d2a288444f9e88";
export const url=new URL("../icons/S/skillet-fill.svg?v=5c1216fc681670bdcc5e2c72445e2bcd6e97d4e398a759865f098514ea2c3a35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
