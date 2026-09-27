export const name="blinds_2-fill";
export const id="dl_c50a0b43939695dfc7f9";
export const url=new URL("../icons/blinds_2-fill.svg?v=f3a57f1b151260957684d154d36512d8948a2f33885cd53e3c35bc5f82867a44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
