export const name="mobile_cancel-fill";
export const id="dl_b51ecf9bc235c7d00a77";
export const url=new URL("../icons/mobile_cancel-fill.svg?v=58c0ef99caea5cf1ff56f3abb82ea00735bc443010456aa6119b1ee4ca560e71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
