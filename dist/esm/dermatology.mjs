export const name="dermatology";
export const id="dl_ce1ed85079dd5371faf1";
export const url=new URL("../icons/dermatology.svg?v=04dab9d35e786a7fa86cbea26b376a7161a3bdf04ac21692aae124165cfdd314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
