export const name="panel_split";
export const id="dl_38b4de79e12545a68362";
export const url=new URL("../icons/all_60_named_svgs/panel_split.svg?v=f9ec6f5e6fd2bcce5882e82aa203ad641633a7a7ffd2f9ad39c738a9e38df710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
