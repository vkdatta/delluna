export const name="mouse-fill";
export const id="dl_94d35b8cc377429b8e7e";
export const url=new URL("../icons/M/mouse-fill.svg?v=77eaaf44e0e508ecbe2de4123833ff5580a5af427c09faae818ef3226f6da7a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
