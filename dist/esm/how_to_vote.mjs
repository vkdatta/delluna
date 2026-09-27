export const name="how_to_vote";
export const id="dl_e3b0f6883ba5ec329474";
export const url=new URL("../icons/how_to_vote.svg?v=b1aae6879ec5c115a9fc43f0f5c6a886cb1f2cb9e471d5c942377224ea18ca12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
