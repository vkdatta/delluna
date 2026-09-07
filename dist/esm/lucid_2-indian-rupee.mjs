export const name="lucid_2-indian-rupee";
export const id="dl_78fec6d46574485b8acb";
export const url=new URL("../icons/lucid_2-indian-rupee.svg?v=243560d8a49ca4b9fe06b15116f70fc50a041743a8c2245fc6fabe7615a82b71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
