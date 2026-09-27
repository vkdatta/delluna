export const name="text-aa-bold";
export const id="dl_f5298adae6ad7337a67d";
export const url=new URL("../icons/text-aa-bold.svg?v=77a4efa5d3a6bb90cdcacf92902e76c0478935287a5754a2004a3c4251b87c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
