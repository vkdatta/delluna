export const name="move_vertical";
export const id="dl_07482e3171d14fc890a2";
export const url=new URL("../icons/all_60_named_svgs/move_vertical.svg?v=f06fff4f2e9ebf065cd8efea38d6fe92e2df03e4a8409cc74112ddb97d563b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
