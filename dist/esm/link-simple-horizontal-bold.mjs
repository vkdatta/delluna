export const name="link-simple-horizontal-bold";
export const id="dl_f663ae68f7504b9c97b3";
export const url=new URL("../icons/link-simple-horizontal-bold.svg?v=8b4d16781316d94897591d5a0080de409b466f852f79cede97b748d51340985b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
