export const name="award_star";
export const id="dl_09af84def74097c597e9";
export const url=new URL("../icons/award_star.svg?v=c88f15cffbb73130cdf59d1d63dab233f5216668cdf2b0fd34ce02a4b5f38d28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
