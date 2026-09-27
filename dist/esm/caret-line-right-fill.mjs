export const name="caret-line-right-fill";
export const id="dl_22694f9e41164a15b484";
export const url=new URL("../icons/caret-line-right-fill.svg?v=7df93de8febf24022463c3db7aa9b31aba8f84191bc32b716e53de52d0c5585c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
