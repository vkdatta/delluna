export const name="file-sql-duotone";
export const id="dl_dc342fc453aa4b80abb5";
export const url=new URL("../icons/file-sql-duotone.svg?v=9d21442c265b5ca6468a5410535976d5d3b29dab6e3dee5ae4be39dffa24c7dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
