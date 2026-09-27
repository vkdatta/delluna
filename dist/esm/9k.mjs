export const name="9k";
export const id="dl_b16a20021d79f2997c2d";
export const url=new URL("../icons/9k.svg?v=af3a633118d7782bfeb5726c24b362066ff4a7f6de1704203601bf66b8c222aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
