export const name="fast-forward";
export const id="dl_93eebfb1a432477b8c25";
export const url=new URL("../icons/fast-forward.svg?v=d3e505afbb1af42b8ad5536fda24b6b240623ca2e59a8dfb313242f68a0f1991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
