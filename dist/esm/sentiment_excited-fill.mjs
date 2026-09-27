export const name="sentiment_excited-fill";
export const id="dl_265bca79154480a607e4";
export const url=new URL("../icons/sentiment_excited-fill.svg?v=d4cdf1acb6e1f0e1e697e20ee96d460dae4ed3b12d309fd489dc63f1285c536e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
