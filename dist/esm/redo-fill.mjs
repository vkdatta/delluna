export const name="redo-fill";
export const id="dl_28cbddc6790d5e4b6e53";
export const url=new URL("../icons/redo-fill.svg?v=9f36cd9e157acd66f534be99fccbfb7cd7406c9052d220b212bf6ff3c344746e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
