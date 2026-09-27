export const name="table-rows-split";
export const id="dl_8e9f36a630ae4b15a0e7";
export const url=new URL("../icons/table-rows-split.svg?v=04ecbcd1495b187ea61f33d88c96fdeb35c9e1aa9b8f31b182d873558ff3ce80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
