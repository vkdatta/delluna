export const name="database-fill";
export const id="dl_22af0dddb2ad4a4c9a43";
export const url=new URL("../icons/database-fill.svg?v=30f48d030bd42bcac799ee657e026629a89fac174790c8d37ff4a71d415d7988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
