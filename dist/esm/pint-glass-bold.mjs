export const name="pint-glass-bold";
export const id="dl_e8f44bdabb414a748a6d";
export const url=new URL("../icons/pint-glass-bold.svg?v=a0714e4da3960c22c4255429c0743c8de95c81097e77364f570f15a016cf82e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
