export const name="not-superset-of-bold";
export const id="dl_9bafb87237a643018840";
export const url=new URL("../icons/not-superset-of-bold.svg?v=85a1fa319e3889600df9f3f53f06043b71a6e74084eb673b2c84dd11e09093b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
