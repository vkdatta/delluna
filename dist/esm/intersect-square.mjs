export const name="intersect-square";
export const id="dl_e8a461fcbf234d81af51";
export const url=new URL("../icons/intersect-square.svg?v=8d0f045e07f5bf751e3a090bdccf95d7b553b380558675e134c356983c7a0c9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
