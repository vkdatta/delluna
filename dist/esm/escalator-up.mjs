export const name="escalator-up";
export const id="dl_df6f964906d6476b97a4";
export const url=new URL("../icons/escalator-up.svg?v=948a33c6b309b0c06c7cff8f395956c4f5c7e573ef97a597c6f5288f6cc1199d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
