export const name="screen_rotation_alt-fill";
export const id="dl_9d3c3401291a477cb9cb";
export const url=new URL("../icons/screen_rotation_alt-fill.svg?v=87ebaa53267752cf31edb2673e958d8738dc193aedec161c69e7e322765ea393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
