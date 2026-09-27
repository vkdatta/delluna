export const name="dynamic_form-fill";
export const id="dl_918e8ae8ba182edb9f48";
export const url=new URL("../icons/dynamic_form-fill.svg?v=603ac67b5c5af9ace09e2faa5881b1629f444533ebd32601e5e216d3260c4056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
