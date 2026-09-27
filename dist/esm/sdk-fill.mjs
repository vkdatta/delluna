export const name="sdk-fill";
export const id="dl_232158a78530ccf0dc19";
export const url=new URL("../icons/sdk-fill.svg?v=68ccbb6f6eddc295a0b27c6939595ddc9af94d96dfdffa6789c6fec6acea2597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
