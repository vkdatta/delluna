export const name="switches";
export const id="dl_e7ad74413bfc9a1c9f39";
export const url=new URL("../icons/switches.svg?v=21ea1b6ed4b9cbaf722e040d61b305bb66f2f5c3938e1b1415dcc1767aa0c855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
