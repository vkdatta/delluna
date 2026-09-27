export const name="assistant_direction";
export const id="dl_df16fba51dedd9bc1101";
export const url=new URL("../icons/assistant_direction.svg?v=84fae74a846a5ce6c69135a245332e46433368719feaff290755a99183547d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
