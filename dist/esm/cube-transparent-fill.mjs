export const name="cube-transparent-fill";
export const id="dl_2a416be7bdd249428491";
export const url=new URL("../icons/cube-transparent-fill.svg?v=6029f1b6950395ab6f3bbebd588f2211ca66ef47b3a43e2cdbd825efce84842d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
