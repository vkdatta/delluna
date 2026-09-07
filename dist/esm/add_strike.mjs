export const name="add_strike";
export const id="dl_f213eeea84d348b0acf5";
export const url=new URL("../icons/all_60_named_svgs/add_strike.svg?v=f63980dd36bbc90776772368146b23c5b0294719e9c4f9fc05ab4d8ee148e15c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
