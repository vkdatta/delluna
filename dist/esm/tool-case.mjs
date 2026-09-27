export const name="tool-case";
export const id="dl_2774ea49bb3a4b239fd2";
export const url=new URL("../icons/tool-case.svg?v=3d8d665359971cd20a2bf55d3024e3b848aafc294db3a08aaea3495768b47ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
