export const name="number-five-duotone";
export const id="dl_5534ffe68da14694b80d";
export const url=new URL("../icons/number-five-duotone.svg?v=0db11cdf70fb30cb4edc539ddc551d6ed036311bbd993882a91954863bb5f603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
