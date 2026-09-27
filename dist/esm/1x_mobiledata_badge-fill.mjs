export const name="1x_mobiledata_badge-fill";
export const id="dl_77fb8fbcf6d5aacda6a7";
export const url=new URL("../icons/1x_mobiledata_badge-fill.svg?v=d32a68a497a1e5568ad603af0a5d01702b5dfd5ee74d1eeadb8eedbe2491fb3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
