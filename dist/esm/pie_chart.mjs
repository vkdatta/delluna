export const name="pie_chart";
export const id="dl_f045cc9cf64efe4ccd50";
export const url=new URL("../icons/pie_chart.svg?v=f1c2020ce7e02c2006ac9e389dcd5ed615f9b55a4788c03e3e196c96e01cab6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
