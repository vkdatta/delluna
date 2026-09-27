export const name="computer-tower-fill";
export const id="dl_7bf5815e2e954d32af1b";
export const url=new URL("../icons/computer-tower-fill.svg?v=976f844e23ea5385e7240c1d33880877d5fa41fe7925e591868be6869b818858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
