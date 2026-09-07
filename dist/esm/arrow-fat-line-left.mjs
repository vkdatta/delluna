export const name="arrow-fat-line-left";
export const id="dl_b014db38c77c49ccbc0d";
export const url=new URL("../icons/arrow-fat-line-left.svg?v=71eb090193432fcd27b93faf5dac2c9e6395e8c2687a3d7b47f8f164823e1c00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
