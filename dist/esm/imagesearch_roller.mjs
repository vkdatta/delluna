export const name="imagesearch_roller";
export const id="dl_a3871410dd3f64c6259d";
export const url=new URL("../icons/imagesearch_roller.svg?v=9bf928a70a692759cf4b554fadfd744222f4628ee026c85ea78992f40bc19c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
