export const name="jar-duotone";
export const id="dl_2c9560aa7b9047e1b8f6";
export const url=new URL("../icons/jar-duotone.svg?v=387842214b478e839ffcdf184ec49b89836bc2cb86f33f78399fa375595fe063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
