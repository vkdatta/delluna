export const name="8mp-fill";
export const id="dl_f74bbcc8798228afcc86";
export const url=new URL("../icons/8mp-fill.svg?v=018b326d2a2e42099c3afe6c2cfbfa1381e5462557ed1c664504431c00b608b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
