export const name="nest_display_max-fill";
export const id="dl_a8a49683dceeea7746a0";
export const url=new URL("../icons/nest_display_max-fill.svg?v=1d6196baa9899fadb72de3bc244116779358dc30bc712223b6a84d8b6a13efd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
