export const name="deepseek";
export const id="dl_9f316ed5ffa649b1b432";
export const url=new URL("../icons/newd7/deepseek.svg?v=48a7cbe443b3bd297a7815f2f9d041dd869991849d1285ff491cbf6e109cbcd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
