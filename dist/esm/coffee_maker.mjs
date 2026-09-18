export const name="coffee_maker";
export const id="dl_af5e820c0d0448868d85";
export const url=new URL("../icons/coffee_maker.svg?v=bf32f65b53bd2c0dd4ee198a14282dd872931f8f2a317f79b288633684eb8de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
