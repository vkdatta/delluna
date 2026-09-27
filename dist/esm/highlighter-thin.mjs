export const name="highlighter-thin";
export const id="dl_f91fe8b2f2454e519496";
export const url=new URL("../icons/highlighter-thin.svg?v=b5e2a044a19ad72ec942adeb3c575dd8225b03d510a84711e333660cbd23d391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
