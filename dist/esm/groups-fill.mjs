export const name="groups-fill";
export const id="dl_f3f6e9ea94e7e87ee4ff";
export const url=new URL("../icons/groups-fill.svg?v=f6ad46f4fb5a43c42666f4aafd36adad0c3a32ba35323948ce36f74e732f6d9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
