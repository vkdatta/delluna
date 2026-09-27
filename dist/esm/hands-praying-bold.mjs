export const name="hands-praying-bold";
export const id="dl_399890946537422aaa68";
export const url=new URL("../icons/hands-praying-bold.svg?v=fc2d84c8684edb8d146a535e4633c1d3ac2e5c765ab9dfa7c3eff03c5f2ee6bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
