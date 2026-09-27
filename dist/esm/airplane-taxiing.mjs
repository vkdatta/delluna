export const name="airplane-taxiing";
export const id="dl_cee3b9313023404cbdb9";
export const url=new URL("../icons/airplane-taxiing.svg?v=5b0c1adfb4e71a205e2b69e4a4d0ed10a3c27db4ac12f247db85fad6c887069f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
