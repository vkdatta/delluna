export const name="fast-forward-fill";
export const id="dl_044397962d8e40519a00";
export const url=new URL("../icons/fast-forward-fill.svg?v=b6aafcc8eb60053fe9b112a762e0900dec7251a9f459b572da7f1c2194992e45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
