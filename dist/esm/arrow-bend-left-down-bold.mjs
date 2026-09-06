export const name="arrow-bend-left-down-bold";
export const id="dl_6a607b54329446048614";
export const url=new URL("../icons/arrow-bend-left-down-bold.svg?v=c2e0e94c8f62e286d8de1ee617a8c5f27c9750aa48d4bd435d843011a6ee263c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
