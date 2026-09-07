export const name="collapse-chevron";
export const id="dl_4bdc079124914eb5a562";
export const url=new URL("../icons/close/collapse-chevron.svg?v=fe3c33d3ff4d9ffa02e6e20e0818fa882a021630e209df53fe6dc38f60ac552f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
