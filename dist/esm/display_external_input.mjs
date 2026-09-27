export const name="display_external_input";
export const id="dl_780b353bb6d210bc76f7";
export const url=new URL("../icons/display_external_input.svg?v=006d808ccdf564e1cfc62b929f4b48e686dd906cafeeab27a092f1073dd9b9eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
