export const name="bus-bold";
export const id="dl_ecd5b43d21084592b46e";
export const url=new URL("../icons/bus-bold.svg?v=a8115c8d94269642552b59cd31d696cec5685760d73c60cd7dcd10494045dafd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
