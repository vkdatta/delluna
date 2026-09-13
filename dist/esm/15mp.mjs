export const name="15mp";
export const id="dl_d429cdadaad141249f16";
export const url=new URL("../icons/1/15mp.svg?v=b9a0695469eec2584a9e710f4eb7c4115bbe20c5aa4fb2c3544cb8c167cd1990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
