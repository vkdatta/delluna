export const name="warning-light";
export const id="dl_21dd36778d6f3ce8cc16";
export const url=new URL("../icons/warning-light.svg?v=7197ff610363aaf996081f6d6f0e3e65cacbf13e8be90735050bb54227541cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
