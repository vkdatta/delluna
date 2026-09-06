export const name="pencil-circle-bold";
export const id="dl_9fc22f74554a4db0a4fb";
export const url=new URL("../icons/pencil-circle-bold.svg?v=63701d2b4ee6adbde22c1dc4c90724c54a6ddf9253343e86744b9421885c8983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
