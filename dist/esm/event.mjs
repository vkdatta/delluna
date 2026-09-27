export const name="event";
export const id="dl_e69f020960f339c58b48";
export const url=new URL("../icons/event.svg?v=330c437cefa6cf79f9d32e1ff7784b40ae83a858c1947c1dc626ccd70308e839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
