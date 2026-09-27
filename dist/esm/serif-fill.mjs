export const name="serif-fill";
export const id="dl_1237a9149c137ad21977";
export const url=new URL("../icons/serif-fill.svg?v=42cc729d64bd57582bce02dcf5fe5879adc2ecb4a7553b7bc2dcf91460ed28c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
