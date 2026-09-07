export const name="bold-plus";
export const id="dl_4073e38bdd674c3da7e4";
export const url=new URL("../icons/add/bold-plus.svg?v=510d84b50c54d0184692b5838be713bacc2024a479216164ec863f3b325dc5f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
