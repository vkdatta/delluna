export const name="table_chart";
export const id="dl_f8a3c9a0d1fe4b699102";
export const url=new URL("../icons/T/table_chart.svg?v=a1b942a0d03166c42ba30e47147127705b7422a15b1deaeb622a53c043ac7e32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
