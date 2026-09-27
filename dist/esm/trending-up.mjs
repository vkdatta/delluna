export const name="trending-up";
export const id="dl_5b95424ac8344d6b865d";
export const url=new URL("../icons/trending-up.svg?v=1b39ead1b1303267e2610d9a18ac5f43367cb672cc4f81e36c7d4d57df87fea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
