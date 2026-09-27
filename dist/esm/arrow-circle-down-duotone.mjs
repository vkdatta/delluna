export const name="arrow-circle-down-duotone";
export const id="dl_9c1d4448711e428d8b38";
export const url=new URL("../icons/arrow-circle-down-duotone.svg?v=80cc76eb926fbbf3aff9d0314351b55225e7cf0e975dfecfb14f3ac2614e4086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
