export const name="watch_arrow";
export const id="dl_659cf0e828984225a116";
export const url=new URL("../icons/watch_arrow.svg?v=86df49b1309ced441828ffac442694f1a346d16cf36f70eee34355ae5ef626f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
