export const name="light_mode_auto-fill";
export const id="dl_80c1818cf5724b05bfb0";
export const url=new URL("../icons/L/light_mode_auto-fill.svg?v=0c29fcda0ace8e18beab486fb56f6b720538291dd8e9c06ccf4765dc73058ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
