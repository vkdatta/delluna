export const name="find_replace-fill";
export const id="dl_0710f9a0d93c4662b41d";
export const url=new URL("../icons/find_replace-fill.svg?v=551c69cd7a6802356c004c5b20053b09c604bffde07ced3da8e40112d72bb288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
