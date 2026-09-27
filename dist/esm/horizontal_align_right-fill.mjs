export const name="horizontal_align_right-fill";
export const id="dl_a81d51c80f82fd30b8c7";
export const url=new URL("../icons/horizontal_align_right-fill.svg?v=172f220f3dc382b6138f36e126bad4a53ec074d9ef08770057633a12673e3f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
