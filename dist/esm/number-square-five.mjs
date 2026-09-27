export const name="number-square-five";
export const id="dl_761a1f23a185434b8a35";
export const url=new URL("../icons/number-square-five.svg?v=d1ab8c94bb151482864db226d39c467be10a51656e2313701bd31feed03a1900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
