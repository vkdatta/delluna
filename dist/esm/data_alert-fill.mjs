export const name="data_alert-fill";
export const id="dl_53b8ca04915a9e5b7c52";
export const url=new URL("../icons/data_alert-fill.svg?v=1c0ce87a8b8a1cf49ccbe0d01a6dffb3cdf9779c617d5dc31b00a1c5ae55e084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
