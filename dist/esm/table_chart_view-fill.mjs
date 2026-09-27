export const name="table_chart_view-fill";
export const id="dl_aea78e66f48eec9fd10c";
export const url=new URL("../icons/table_chart_view-fill.svg?v=17bdbdeccd940656a55ba275692a2c6ba43fd4fa6cb6329bc8923b444a03be72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
