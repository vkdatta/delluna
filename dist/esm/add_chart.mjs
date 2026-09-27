export const name="add_chart";
export const id="dl_6af507f409d0dff76a05";
export const url=new URL("../icons/add_chart.svg?v=4d0a2bce8234009decdec29da2cc6cd9490f00fb1ddffe618e74a3b6c6ec813f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
