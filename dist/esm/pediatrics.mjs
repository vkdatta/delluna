export const name="pediatrics";
export const id="dl_461e0abcf6fde145f6bd";
export const url=new URL("../icons/pediatrics.svg?v=3dacbced85f2c39e028f7c2037abeb6435c2c4451188c8ea0b681de9e633d861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
