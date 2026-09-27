export const name="format_image_front";
export const id="dl_17ef96df1e61fb109745";
export const url=new URL("../icons/format_image_front.svg?v=e2595781bffd8c77778589594e9d5a2726d9804ce5c8cc0fe1bab3e874e24a91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
