export const name="hourglass-fill";
export const id="dl_8a21f9d919e142448837";
export const url=new URL("../icons/hourglass-fill.svg?v=6433034599a23cd4ee64828bdceb26c90603e1ce0cc2c49a0cf5f4c1a75ce69f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
