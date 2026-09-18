export const name="credit_card_heart";
export const id="dl_00fb95e5489e4675850b";
export const url=new URL("../icons/credit_card_heart.svg?v=1892defd2f938d169801ec795bc035a866790d36b392c582b2a714ec101a40e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
