export const name="lucid_1-chart-column-big";
export const id="dl_8b31bb17053e4c1ea6f7";
export const url=new URL("../icons/lucid_1-chart-column-big.svg?v=0e6abed48381595d50da2bb5954cfd180a26ff2fdf6a81423e8fbb1ebac542b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
