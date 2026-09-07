export const name="timer-off";
export const id="dl_ea685f37361d4a65abe7";
export const url=new URL("../icons/timer-off.svg?v=e39b96a95747c3cadd340295c6f717ba838fc34545e1fff4cde4bda042e11586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
