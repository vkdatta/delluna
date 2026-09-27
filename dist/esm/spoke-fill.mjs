export const name="spoke-fill";
export const id="dl_9c26e1f596388b408e25";
export const url=new URL("../icons/spoke-fill.svg?v=01d55e09af16fa9fe4f408b5b331891d4c41cc06977157d79b605e645415a81d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
