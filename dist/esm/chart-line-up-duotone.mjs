export const name="chart-line-up-duotone";
export const id="dl_4e9e47a6edc14a119959";
export const url=new URL("../icons/chart-line-up-duotone.svg?v=983073c45c36e4995dcfa154e16e41629cc266500ddeef5011e67c3cea644417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
