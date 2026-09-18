export const name="local_post_office-fill";
export const id="dl_4b18cc0fd8e5468093fc";
export const url=new URL("../icons/local_post_office-fill.svg?v=e452c0f109c0ddc783a5fcb45d81405286cf3e24fd4d428dbd557be8d82870e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
