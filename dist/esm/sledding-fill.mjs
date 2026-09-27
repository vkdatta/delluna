export const name="sledding-fill";
export const id="dl_fc5ea8fd2a4231e833f5";
export const url=new URL("../icons/sledding-fill.svg?v=eb0a44be7ee1be5bd443caa8b395f0aba3f01ff29d757ba0c7d35ceae109dff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
