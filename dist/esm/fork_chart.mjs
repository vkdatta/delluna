export const name="fork_chart";
export const id="dl_ce51daec244e43ccaec5";
export const url=new URL("../icons/fork_chart.svg?v=89dfe12c723dfd51d782978d05d8dd7951e4fed36b1a03aa5ab546672f8e9b0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
