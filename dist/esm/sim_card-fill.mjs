export const name="sim_card-fill";
export const id="dl_9f52d7ab92d7948942e3";
export const url=new URL("../icons/sim_card-fill.svg?v=9ea15a12c282eb503e0fdd16db53af450c327662e71a62d56cfde0481ae3c5f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
