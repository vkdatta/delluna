export const name="hls";
export const id="dl_19495dd1a2fc4aa58be4";
export const url=new URL("../icons/H/hls.svg?v=680f27c629f7bc9ea7d6178351f36c91e1288c95dc327becdc2f4123a354d0b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
