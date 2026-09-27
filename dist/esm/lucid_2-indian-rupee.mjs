export const name="lucid_2-indian-rupee";
export const id="dl_78fec6d46574485b8acb";
export const url=new URL("../icons/lucid_2-indian-rupee.svg?v=287006017966b5cdb2cf2877d8540881ae2921a22df1bda7fe4f5c3eaa4706a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
