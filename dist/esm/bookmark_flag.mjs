export const name="bookmark_flag";
export const id="dl_4181d8120a8bab589abc";
export const url=new URL("../icons/bookmark_flag.svg?v=172bc27fd5cdb7a11d3a57f05916b4f282109565d3df6717863c7d14cec0bd80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
