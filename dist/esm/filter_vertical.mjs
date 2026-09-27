export const name="filter_vertical";
export const id="dl_42330172fe99d51f42ae";
export const url=new URL("../icons/filter_vertical.svg?v=e9a594c3b264964b100b8e3def58cc327dd39ba205ddb294dcb97bd656905b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
