export const name="auto_stories-fill";
export const id="dl_a59a7ec9b5802b4075e3";
export const url=new URL("../icons/auto_stories-fill.svg?v=1380568b130c5663f3b611c7fbd03d5ed28b4ac36c2a9ac00ffa219eb769bdca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
