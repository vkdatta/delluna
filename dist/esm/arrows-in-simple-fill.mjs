export const name="arrows-in-simple-fill";
export const id="dl_ee902b8b6c234ee2b6ca";
export const url=new URL("../icons/arrows-in-simple-fill.svg?v=1832cf340489f21a8e3f58f03f07bd1b0a7f351469c64072b77bdf566eb98725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
