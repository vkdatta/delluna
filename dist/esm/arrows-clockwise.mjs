export const name="arrows-clockwise";
export const id="dl_99af76ae106e4f99a875";
export const url=new URL("../icons/arrows-clockwise.svg?v=1a52bc1aee4d7cf060a70b4902fadcb2dc2329899456024add3a298810c2e9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
