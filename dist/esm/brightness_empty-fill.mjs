export const name="brightness_empty-fill";
export const id="dl_34fdd0fb2344bd7d4ed8";
export const url=new URL("../icons/brightness_empty-fill.svg?v=e048b41c33f7ec300f5e2541e05fc398d82433397f5c27a1e86396a95237b798",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
