export const name="globe-bold";
export const id="dl_41939bac5bdd41e5b2b2";
export const url=new URL("../icons/globe-bold.svg?v=60515807ef09d037e68805baf7b2fc199d6649c17ee594c4c55978fd5da72944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
