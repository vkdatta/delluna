export const name="pie_chart";
export const id="dl_6b7318724075cfbae756";
export const url=new URL("../icons/pie_chart.svg?v=1efa295404f7f84d7d7156b65499c877331510c58f829666d4a980a8e9db5845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
