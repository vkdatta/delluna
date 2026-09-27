export const name="squares-four";
export const id="dl_549e57b7d83434b82bd9";
export const url=new URL("../icons/squares-four.svg?v=d4c9a5d22e59a4acd467ce16dc48d83dada348788687fd5aaa8e7045f59e21df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
