export const name="home_storage-fill";
export const id="dl_ef5da19411c44d0c86b4";
export const url=new URL("../icons/home_storage-fill.svg?v=698ec2f848a8410092c978130e0500bf215d8ebc016af69b8c91dcb46f9ecd9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
