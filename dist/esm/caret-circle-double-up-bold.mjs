export const name="caret-circle-double-up-bold";
export const id="dl_40230a50018e40cb819e";
export const url=new URL("../icons/caret-circle-double-up-bold.svg?v=4eb84cec62565a24528802dec93ec5dffb59355076e3a8df744d9ce30f117945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
