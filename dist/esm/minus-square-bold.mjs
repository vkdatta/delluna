export const name="minus-square-bold";
export const id="dl_1f4f7984393346569975";
export const url=new URL("../icons/minus-square-bold.svg?v=c3c09b48edc671a1c9fc7e7b4a70c3b1727576682445f9912075dc63f9a038f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
