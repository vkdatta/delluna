export const name="mask-happy";
export const id="dl_f3d593dc090848e7b210";
export const url=new URL("../icons/mask-happy.svg?v=f6b6391fc558438070b3841ba7e2c216f64c5d94bcda9c741167f026aa927e45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
