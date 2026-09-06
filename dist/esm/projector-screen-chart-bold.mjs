export const name="projector-screen-chart-bold";
export const id="dl_c248b61450b7461db766";
export const url=new URL("../icons/projector-screen-chart-bold.svg?v=b36c337cf939e148d6c45a4c9978e2e65c2e61755987948c1ee4fc7110e67d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
