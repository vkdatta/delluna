export const name="align-top-simple-fill";
export const id="dl_eb2e5c5156e1466488e8";
export const url=new URL("../icons/align-top-simple-fill.svg?v=6d38caaac76fdb786f4e20647c04e34b7ec18b6769fefa4b92a9d6bb97d6a6ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
