export const name="handbag-simple-duotone";
export const id="dl_54281810d85d40ada986";
export const url=new URL("../icons/handbag-simple-duotone.svg?v=659d24f77b0efeafee696177dea2eecb806386e85921df0e482d486884c1e3ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
