export const name="cat-bold";
export const id="dl_39202a0676624583a084";
export const url=new URL("../icons/cat-bold.svg?v=24a92aac4b6cb11d22714ddbedd1fad799d6ad43bcdd9e368f8b1e99d5ee38da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
