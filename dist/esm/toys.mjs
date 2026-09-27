export const name="toys";
export const id="dl_e4ce79533168ffdfb70d";
export const url=new URL("../icons/toys.svg?v=3467d87747d3dc5a348beef638e2e5295605fc3c774f3ae4976903ba73f724e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
