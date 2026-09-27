export const name="timer_arrow_up";
export const id="dl_76eea8109e7cc17c4aa0";
export const url=new URL("../icons/timer_arrow_up.svg?v=c6214b1978b9014f8a32aba3f34ed98191490df6057ac738ae52ae52a090cad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
