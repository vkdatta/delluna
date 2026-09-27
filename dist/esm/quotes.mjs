export const name="quotes";
export const id="dl_f11464280c7b48eeac5a";
export const url=new URL("../icons/quotes.svg?v=9a332791c7e9cfcc309507e2e347921314e28cbcc4701e4f24922be42c57b473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
