export const name="lucid_2-luggage";
export const id="dl_f507c993da7d4c6381a1";
export const url=new URL("../icons/lucid_2-luggage.svg?v=fb69d78ccf423e3e6ec89cb87f23bf3eb48b2aba303fc4a0bdf78d4741b5d1b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
