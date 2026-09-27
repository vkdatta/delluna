export const name="trail_length-fill";
export const id="dl_da38c7b525e051696a91";
export const url=new URL("../icons/trail_length-fill.svg?v=c3cc106200709e43d43a8b4c5a332ba7b086e7abb45ca61ee05c8062badcaf71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
