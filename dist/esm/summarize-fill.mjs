export const name="summarize-fill";
export const id="dl_07fa25279502767ebe14";
export const url=new URL("../icons/summarize-fill.svg?v=2ede987b1729f1edde4b53630490aa397062cf792e78c46baca3330e4fb86932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
