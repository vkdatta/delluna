export const name="credit_card_clock";
export const id="dl_8d18e569c0814a2baaa3";
export const url=new URL("../icons/C/credit_card_clock.svg?v=cb5c283769eca6360cae93884bc786496f0da2fef70094435646abcd56a50389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
