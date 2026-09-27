export const name="arrow-fat-line-down";
export const id="dl_0768feb2ea8d4f8aa288";
export const url=new URL("../icons/arrow-fat-line-down.svg?v=36e25560bdb0bdca1d02e9a06c1baf5c457ac2f3fede3cc49d4f93d18b6791b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
