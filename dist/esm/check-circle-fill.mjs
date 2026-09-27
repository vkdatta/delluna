export const name="check-circle-fill";
export const id="dl_b769b75d23df44a292e7";
export const url=new URL("../icons/check-circle-fill.svg?v=ed12fb7a17e3126c4215ed6a59a5779486c449b8c8adb5aa875cbb5b263f09c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
