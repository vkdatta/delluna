export const name="kebab_dining";
export const id="dl_7cca0ff97fa45a17fc92";
export const url=new URL("../icons/kebab_dining.svg?v=788aa1d9640cc6d1440ab4836446dbbfff448df91201d9fbf5c4f1ae85974a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
