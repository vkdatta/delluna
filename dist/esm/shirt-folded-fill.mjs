export const name="shirt-folded-fill";
export const id="dl_9b9bacc6ad3f0e011173";
export const url=new URL("../icons/shirt-folded-fill.svg?v=9acf87b4247c67e4bdc88d7906edc3a9afd8f286388aa47bb4f4c57db4047c12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
