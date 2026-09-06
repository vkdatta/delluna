export const name="battery-warning-thin";
export const id="dl_aa619346ddaa4b988376";
export const url=new URL("../icons/battery-warning-thin.svg?v=e82b5c2162ccae92c6ef30052717e1cf1f25e603c590205a27bbf800fffa765b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
