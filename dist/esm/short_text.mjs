export const name="short_text";
export const id="dl_814ec044852ecf79208b";
export const url=new URL("../icons/short_text.svg?v=506ca8b76a8b3445c373d09e333c3ab02d3f3a35de48ec28b02a46c2abcd4e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
