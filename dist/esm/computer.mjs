export const name="computer";
export const id="dl_7b5f3b224e64426ab88b";
export const url=new URL("../icons/computer.svg?v=e302eb60288705e7bbac4f95b21ad023bbd146dfb7d3e718c9fee7cbc08ead2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
