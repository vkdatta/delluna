export const name="attach_money";
export const id="dl_9aee1beb4793fcae969f";
export const url=new URL("../icons/attach_money.svg?v=b69e97419e4140c7073358fb5e4b58ea5cf93f15609fb6cacd418adcd8390900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
