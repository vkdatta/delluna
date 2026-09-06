export const name="mouse-thin";
export const id="dl_8df4701e664c4c4a8fc4";
export const url=new URL("../icons/mouse-thin.svg?v=aa31efb765fcd94f4e4efe2ddba73df21b40059c6ff4a05e9bccbfbcd6fbd632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
