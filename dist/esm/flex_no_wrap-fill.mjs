export const name="flex_no_wrap-fill";
export const id="dl_924a95fea19349da86e7";
export const url=new URL("../icons/flex_no_wrap-fill.svg?v=db4ec9650db2d9491c56e9be98ef54533ddd66d604781a8cab322ec3685db9c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
