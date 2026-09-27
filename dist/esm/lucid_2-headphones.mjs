export const name="lucid_2-headphones";
export const id="dl_30782f176d514024a4b9";
export const url=new URL("../icons/lucid_2-headphones.svg?v=5feccf086ce3def6150e98d2df1477337c929b48a3a9677c4c24d9c906feeec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
