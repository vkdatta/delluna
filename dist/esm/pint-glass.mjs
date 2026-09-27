export const name="pint-glass";
export const id="dl_f27d9e570d4a4d878aed";
export const url=new URL("../icons/pint-glass.svg?v=b10e77cca1af7632948e04db3b3e1b49b09828edf867144af13c9ec9e047e748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
