export const name="lucid_2-file-clock";
export const id="dl_065419471e444a068768";
export const url=new URL("../icons/lucid_2-file-clock.svg?v=0c0f61fd1e5312c3cd4e4c304a27a846b8fb6f6ce78fc1acb0fafa5a40707116",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
