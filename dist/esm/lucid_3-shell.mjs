export const name="lucid_3-shell";
export const id="dl_920e679e143945cb8aee";
export const url=new URL("../icons/lucid_3-shell.svg?v=b5ed6b5f5ae27d93be9111d98035a7b33cee9c26abac43d40765556b641d89ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
