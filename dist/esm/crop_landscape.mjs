export const name="crop_landscape";
export const id="dl_22c861acf058478ae3ee";
export const url=new URL("../icons/crop_landscape.svg?v=faed274728f9d5e5eb04b8bb6f7074344bc8372437f1a124ac9db70feabe1efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
