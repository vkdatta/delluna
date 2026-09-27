export const name="finance-fill";
export const id="dl_f93270d896166fa56958";
export const url=new URL("../icons/finance-fill.svg?v=c9bc9365034e900aff2333d093a2cfff8a96d7576b9368f806b4181cea16d14b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
