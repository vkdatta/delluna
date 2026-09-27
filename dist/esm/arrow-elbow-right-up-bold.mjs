export const name="arrow-elbow-right-up-bold";
export const id="dl_83bf2571820f44d09f6d";
export const url=new URL("../icons/arrow-elbow-right-up-bold.svg?v=04a5bc4ded8c47d99189b8b89171f2c444d3f9a0729a98387f776763b3c6bc88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
