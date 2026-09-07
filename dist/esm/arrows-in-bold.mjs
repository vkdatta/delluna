export const name="arrows-in-bold";
export const id="dl_d91da91931194e71a89a";
export const url=new URL("../icons/arrows-in-bold.svg?v=033baba7ff0a4f380be329c28a64f2d435cc85732505950e9e21c6b6818c8014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
