export const name="wheelchair-thin";
export const id="dl_a0477c1635da50862550";
export const url=new URL("../icons/wheelchair-thin.svg?v=fcd4675155732f850bb08d2ad9cc515906977b1e3e43860d43fe0bf4bebccb2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
