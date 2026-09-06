export const name="hand-peace-fill";
export const id="dl_9fe9598e64a7455ba53c";
export const url=new URL("../icons/hand-peace-fill.svg?v=bdeb4186dd2d6bd786eeffc42dd8f7513c67b02d548eca016e4f8fff150f2a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
