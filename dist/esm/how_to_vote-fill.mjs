export const name="how_to_vote-fill";
export const id="dl_df8018cdf18afad6b5a4";
export const url=new URL("../icons/how_to_vote-fill.svg?v=3aaa38c6bb56f383cea9eedb21bac82891e9675ed24480bcd5432b2817d6fa7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
