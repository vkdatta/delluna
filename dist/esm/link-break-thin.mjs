export const name="link-break-thin";
export const id="dl_820f4f15917d4413a4ab";
export const url=new URL("../icons/link-break-thin.svg?v=9c8d28603eb99f713dee1e772b12020dcc89ebd4af4ddea68f381e677b2c4490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
