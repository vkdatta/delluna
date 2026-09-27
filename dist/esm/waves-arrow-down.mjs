export const name="waves-arrow-down";
export const id="dl_f1c4747891b2497b92e3";
export const url=new URL("../icons/waves-arrow-down.svg?v=c7a758ab001b4b54cea79c8e70b87d52b071caea45d12216d5eec462892fbb99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
