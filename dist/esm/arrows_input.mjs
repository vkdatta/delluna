export const name="arrows_input";
export const id="dl_e6ba3026aa0aada68466";
export const url=new URL("../icons/arrows_input.svg?v=31d3bbb39c55ffceda80af1c451c50fe6e69d510ed10a14ec201fa8fff6fdfe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
