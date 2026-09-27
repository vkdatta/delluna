export const name="skillet-fill";
export const id="dl_f6fc02ef3bf27f4d3a5b";
export const url=new URL("../icons/skillet-fill.svg?v=5c1216fc681670bdcc5e2c72445e2bcd6e97d4e398a759865f098514ea2c3a35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
