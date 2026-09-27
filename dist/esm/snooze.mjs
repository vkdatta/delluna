export const name="snooze";
export const id="dl_5ff4e1bceb8e5ea30f8c";
export const url=new URL("../icons/snooze.svg?v=dcd8a834561644c935b02a1f6081b955baf04fede538443afa5e58143c1a3e1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
