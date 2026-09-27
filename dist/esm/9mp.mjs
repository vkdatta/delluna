export const name="9mp";
export const id="dl_8499f62e47f309469d43";
export const url=new URL("../icons/9mp.svg?v=af3a633118d7782bfeb5726c24b362066ff4a7f6de1704203601bf66b8c222aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
