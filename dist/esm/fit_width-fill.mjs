export const name="fit_width-fill";
export const id="dl_c3ffb422005b0147d499";
export const url=new URL("../icons/fit_width-fill.svg?v=7a9306fb1eaab159725f1b09b507df610f30b851f58bed7a347467d80ad3e09f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
