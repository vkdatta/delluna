export const name="check-fat";
export const id="dl_1f05f09742aa4b6aa9ea";
export const url=new URL("../icons/check-fat.svg?v=9884d07b0e0f38c53035e51087278c142bf137ff0f2194f13f17974408857390",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
