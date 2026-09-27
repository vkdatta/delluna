export const name="read_more-fill";
export const id="dl_2fe05a8a257924bc0321";
export const url=new URL("../icons/read_more-fill.svg?v=1e4f39dc0eaaddb3c9bd34c1edb400202ec37368537bce006bc20faeae052c46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
