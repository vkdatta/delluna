export const name="tab_close";
export const id="dl_c57ea577ea604794a249";
export const url=new URL("../icons/T/tab_close.svg?v=7aadfdf769d0925d5c66c69904f8731daaca8f3f4b5bb03ccd7e2ab98302a73c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
