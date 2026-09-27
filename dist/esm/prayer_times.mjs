export const name="prayer_times";
export const id="dl_c32d57b0a41173527488";
export const url=new URL("../icons/prayer_times.svg?v=381d88acc202c2980c21a98737b5368ccb09ad0004da93d242bdc982d2124913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
