export const name="lightbulb-light";
export const id="dl_dbc515c6ad6649b6afdf";
export const url=new URL("../icons/lightbulb-light.svg?v=1767a09dfff1fc24e2feb0d914b98f0e6a463bfaa3352e7ba58e893e85557ed2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
