export const name="navigation-arrow";
export const id="dl_86ac897c305d4a43a424";
export const url=new URL("../icons/navigation-arrow.svg?v=61c9c84a628c63dc609639b888401066914ae8bffd8f33d14ae765034e5ab1eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
