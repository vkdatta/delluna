export const name="number-square-three";
export const id="dl_827bd0b2e5a24b1d8944";
export const url=new URL("../icons/number-square-three.svg?v=24ab388ab6a32bc27dee50889bffcc351835176eb874d8d5cad18f41c46d7ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
