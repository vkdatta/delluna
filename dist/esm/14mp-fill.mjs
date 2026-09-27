export const name="14mp-fill";
export const id="dl_7f8977d0e6ca14ffda40";
export const url=new URL("../icons/14mp-fill.svg?v=0da667d646d62bbd7a59e15d0a56ec1f60360559ea3f3154f1da8c9825fdf344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
