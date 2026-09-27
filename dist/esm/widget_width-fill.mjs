export const name="widget_width-fill";
export const id="dl_2bff6b17975fbbca2324";
export const url=new URL("../icons/widget_width-fill.svg?v=fd8072e3f1be3677453aa1aee76bc39ab5784d063f2e03203a1b6e346241e3eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
