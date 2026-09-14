export const name="assignment";
export const id="dl_29511cdaf98e486f9a7c";
export const url=new URL("../icons/A/assignment.svg?v=d9fe7b845b552dbe347e7ef3010b2c6a567b751e6167cc7014c7589f299079a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
