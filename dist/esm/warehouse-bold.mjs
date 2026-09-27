export const name="warehouse-bold";
export const id="dl_7776693c422783a82d71";
export const url=new URL("../icons/warehouse-bold.svg?v=cea913b5987fcf4ae73790b11e40a43d2f909b335e3f1543feb5b6ec9c4e1e7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
