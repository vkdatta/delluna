export const name="trash-bold";
export const id="dl_76d3be5af77b8c6e9cf2";
export const url=new URL("../icons/trash-bold.svg?v=f5f0ebd456f0eda35ff25e0d9c10c7755e682ac86a830accd39ff0e642a7159b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
