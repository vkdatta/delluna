export const name="volunteer_activism-fill";
export const id="dl_b0c3406c259a4d47c021";
export const url=new URL("../icons/volunteer_activism-fill.svg?v=17b5e8001953e09247e8fc253efabcb89ecf7c056bbecf4e62ea5a204c5ff802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
