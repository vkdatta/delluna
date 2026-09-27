export const name="text-h-six-bold";
export const id="dl_da8abb64e2e6f2845a97";
export const url=new URL("../icons/text-h-six-bold.svg?v=30ace175cedfdbce6ce0d1a8fb9631f25044ac729ff01d125ea538edf4f2fda1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
