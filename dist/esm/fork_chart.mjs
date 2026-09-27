export const name="fork_chart";
export const id="dl_31a1efde627bd7254691";
export const url=new URL("../icons/fork_chart.svg?v=4c722f7d0c522944e027fe8d281b5356fda4b2c80f5c4b158398314db236eec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
