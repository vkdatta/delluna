export const name="hands-praying";
export const id="dl_4f0349bf116f49ca98ed";
export const url=new URL("../icons/hands-praying.svg?v=ea68a32b818e0f962fa3c8e20eb5bd1bfe2a250ba5bc08dd1a6bca0807c880f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
