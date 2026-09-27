export const name="arrow-bend-down-right";
export const id="dl_a93cb32b08ce40e9ac7e";
export const url=new URL("../icons/arrow-bend-down-right.svg?v=ccd0e88243e4d8375b558150f7c7b5d23f3027c6694fd2a9a3b7bef5a757db24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
