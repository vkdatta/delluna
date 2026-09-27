export const name="gif";
export const id="dl_8f173b1e3b2445a2b635";
export const url=new URL("../icons/gif.svg?v=45e03cc4edff5f7430e0a4095579d6598d3636e8af85d052a7d317e96f6dfa22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
