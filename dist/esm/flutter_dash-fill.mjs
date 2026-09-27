export const name="flutter_dash-fill";
export const id="dl_71a013e13bf74a70e56c";
export const url=new URL("../icons/flutter_dash-fill.svg?v=a88d6c75fc58b679198e114791bb5e748a00328242561b949a1e9503cc83f7f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
