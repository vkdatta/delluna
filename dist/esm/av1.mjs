export const name="av1";
export const id="dl_efe503f4ad51740543d3";
export const url=new URL("../icons/av1.svg?v=73022b4417e05c5b9a78f55b49680c4745d08346514dcf93b10ea6e9092d3b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
