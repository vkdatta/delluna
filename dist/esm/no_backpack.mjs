export const name="no_backpack";
export const id="dl_d382e024aba144c5b866";
export const url=new URL("../icons/N/no_backpack.svg?v=baae8765e9e4faa61c0eeabc5441b8a95dec8f612c3969fa8ba0b7f4bd3666ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
