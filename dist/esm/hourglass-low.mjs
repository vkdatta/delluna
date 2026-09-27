export const name="hourglass-low";
export const id="dl_0f9e9731cbc743f6a037";
export const url=new URL("../icons/hourglass-low.svg?v=e75aec26787150aa3ef102c3e7dc38c940192e601d9609496f78130591386077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
