export const name="battery-vertical-medium-duotone";
export const id="dl_6a71f977403e4a658451";
export const url=new URL("../icons/battery-vertical-medium-duotone.svg?v=3e13af58f04249d10c023572c380a2da28f87d312df73a2c3cde0446beb8ff23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
