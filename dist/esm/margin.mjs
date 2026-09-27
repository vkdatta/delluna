export const name="margin";
export const id="dl_0077f1712a47f4c7e649";
export const url=new URL("../icons/margin.svg?v=c7a768a0de77c673d394953aff23e03b7a3abd4a463ca3058cb2c153b34eb5a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
