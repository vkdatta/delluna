export const name="caret-right-thin";
export const id="dl_b11577132a2245598cef";
export const url=new URL("../icons/caret-right-thin.svg?v=d27e945cee0f00fb53263747086f4360d5bd345a39340574e20b346fc509f9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
