export const name="arrow-line-up-right";
export const id="dl_737b821e43174a9a91be";
export const url=new URL("../icons/arrow-line-up-right.svg?v=f0022a7461f1b9d5195065fca6837d2a619f41659d31749019507135bfbdd80d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
