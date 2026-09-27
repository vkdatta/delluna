export const name="subset-proper-of-light";
export const id="dl_0fba7769703c8e235082";
export const url=new URL("../icons/subset-proper-of-light.svg?v=2b851512be677eec7570cc2949598da26fa8e86929e4a68f45730230f5b49615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
