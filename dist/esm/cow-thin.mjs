export const name="cow-thin";
export const id="dl_c047f08df9ef43a2b003";
export const url=new URL("../icons/cow-thin.svg?v=d129e641c187a3c820ba42fd4fb2a17ef79c67298a937784219c58b901a89255",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
