export const name="folder-minus";
export const id="dl_89d5071b8baf4f92aa37";
export const url=new URL("../icons/folder-minus.svg?v=24f021a0eadd7121075cb85005562073ec15378aec822d681dd46c304c7005af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
