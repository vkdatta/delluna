export const name="interactive_space-fill";
export const id="dl_32ffacc8d61d4405b376";
export const url=new URL("../icons/I/interactive_space-fill.svg?v=9178531322f3616b8b9f18588d155875af146fdce20ef31be270c671b4ae1bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
