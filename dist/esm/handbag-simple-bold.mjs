export const name="handbag-simple-bold";
export const id="dl_967101e0723f437f90cf";
export const url=new URL("../icons/handbag-simple-bold.svg?v=e1c610d29f6be6b76316f83840cc86525f57c40817df2109cfef88a977fb8f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
