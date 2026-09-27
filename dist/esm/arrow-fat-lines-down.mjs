export const name="arrow-fat-lines-down";
export const id="dl_aa687f43b3fc42838e77";
export const url=new URL("../icons/arrow-fat-lines-down.svg?v=0beb68ad3db79a6de087bea937fa3f84e5565351ffc575fcf998edfd15ca75c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
