export const name="widget_width-fill";
export const id="dl_5d72e94bbbe24ff0812e";
export const url=new URL("../icons/widget_width-fill.svg?v=8cd4756915562575c936a1cefcf513aeb39c7c2e297c23b57436f945c4070061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
