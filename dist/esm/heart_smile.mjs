export const name="heart_smile";
export const id="dl_45dd0244acb949728f76";
export const url=new URL("../icons/H/heart_smile.svg?v=94325d8ac32c92fcd706c293c3901ae82621cb3b25a887df148f178e84281545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
