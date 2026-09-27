export const name="beanie-thin";
export const id="dl_c8fa661e3fe5460dbbd2";
export const url=new URL("../icons/beanie-thin.svg?v=3d5285d750cf1eebbb42a2711b70ab551631bbd5e368ef8a364171c9234f8e49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
