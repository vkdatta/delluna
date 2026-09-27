export const name="table_chart";
export const id="dl_1d55250b8216a523267f";
export const url=new URL("../icons/table_chart.svg?v=e0bcd7523933e49431a186c908b79d66c97d7a78809b62dba9e4ec64dc87869a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
