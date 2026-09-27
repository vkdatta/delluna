export const name="scales-fill";
export const id="dl_950367009856bcf47443";
export const url=new URL("../icons/scales-fill.svg?v=7785bf4bba6dc8e21d892e48bc2fdf2df4f5da012a409df4d31848f8feea2868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
