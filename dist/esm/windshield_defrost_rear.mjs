export const name="windshield_defrost_rear";
export const id="dl_5ab9719b7631f0150350";
export const url=new URL("../icons/windshield_defrost_rear.svg?v=05df086363a6b471cd86c28bb542beb771949bc73b1438f925ce49b0e078f2c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
