export const name="pipe-wrench-fill";
export const id="dl_435e3264832f4fa08e1d";
export const url=new URL("../icons/pipe-wrench-fill.svg?v=b4316e552cdf59d9ab18a7bcabc87647e9c408eea19d4cc49352f7d560b5edd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
