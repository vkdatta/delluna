export const name="gender-neuter-bold";
export const id="dl_4151caa82f1e4647902f";
export const url=new URL("../icons/gender-neuter-bold.svg?v=883545b26dfb9fd840eda1d4a4b25e143e3dd4406a9c2e08f0fa7e86dfd25440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
