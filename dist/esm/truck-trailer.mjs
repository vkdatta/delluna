export const name="truck-trailer";
export const id="dl_f0d07c818d3af11a70a9";
export const url=new URL("../icons/truck-trailer.svg?v=3e3e214360bf3b7a51907b1398f7d92d2447acafe83c9c313ae3155e6740f37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
