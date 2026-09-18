export const name="forward_30-fill";
export const id="dl_5ba97c2b4ebc4dcbada6";
export const url=new URL("../icons/forward_30-fill.svg?v=6646e9ba054d844af6b02bef8ebd7bf26cd5bc521ab2d6c310ab219788fdf739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
