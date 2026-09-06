export const name="navigation-arrow";
export const id="dl_86ac897c305d4a43a424";
export const url=new URL("../icons/navigation-arrow.svg?v=d3c3a31c8cbeedf1a61771251d04c901687da1649a52c183109257fb9a7802ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
