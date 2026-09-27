export const name="lucid_2-flip-horizontal-2";
export const id="dl_cfec710a685f45a28002";
export const url=new URL("../icons/lucid_2-flip-horizontal-2.svg?v=c2ac17945af71ee4c46f54d673716b0740960bd5b138847f8413e2c7bb373fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
