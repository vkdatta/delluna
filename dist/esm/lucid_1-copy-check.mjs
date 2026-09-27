export const name="lucid_1-copy-check";
export const id="dl_1a50b0fb8e184ada9f15";
export const url=new URL("../icons/lucid_1-copy-check.svg?v=31b2d945267f88e960c8d8e2bfc3306e73bfb87bb99ddfd9dc5ffccb397d7ec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
