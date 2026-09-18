export const name="cloud_done";
export const id="dl_14a272c050404f02a8e3";
export const url=new URL("../icons/cloud_done.svg?v=c35ca62888ce41b50626d1edef256351d30f726d2ed6c9383e127b72fc9aff8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
