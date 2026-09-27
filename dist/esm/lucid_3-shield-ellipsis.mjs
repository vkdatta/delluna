export const name="lucid_3-shield-ellipsis";
export const id="dl_d231de1c72144b558a44";
export const url=new URL("../icons/lucid_3-shield-ellipsis.svg?v=bc701170cfe3b7ae4f38f09adbd6f4f270dfd78a8454c7da8ce38cdc5f06460f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
