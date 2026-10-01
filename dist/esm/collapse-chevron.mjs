export const name="collapse-chevron";
export const id="dl_659da025093629f0a081";
export const url=new URL("../icons/collapse-chevron.svg?v=fe3c33d3ff4d9ffa02e6e20e0818fa882a021630e209df53fe6dc38f60ac552f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
