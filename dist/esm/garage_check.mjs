export const name="garage_check";
export const id="dl_136609a9759bb207aee5";
export const url=new URL("../icons/garage_check.svg?v=54eae89e6c4a1b0186e2ebadd66e190ea23027b032ece783c02d0de81c4a01b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
