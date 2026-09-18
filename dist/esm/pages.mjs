export const name="pages";
export const id="dl_0988d3495e3140d3b99c";
export const url=new URL("../icons/pages.svg?v=ce9bd4ee8d8853789226afb0bc08547c0cc7d4d6aee7f85f2261d0758bc019a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
