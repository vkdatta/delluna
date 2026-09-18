export const name="table_bar";
export const id="dl_bf13f91a23b74a15b68a";
export const url=new URL("../icons/T/table_bar.svg?v=6920d07ec1169f1610cee05904016cc6b7445ddb9fcdb1dfef07709f50b56f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
