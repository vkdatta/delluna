export const name="tally-2";
export const id="dl_151768dbfae84f6bb3e1";
export const url=new URL("../icons/tally-2.svg?v=aeed7445f37de981aded7ccaae7b471bd396522f442ee398b8e783d7ce35325f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
