export const name="drop-slash-bold";
export const id="dl_37b4873bbfb7459486b9";
export const url=new URL("../icons/drop-slash-bold.svg?v=7986b8d301739cc57fd424e41d75e0a75e9655a1101b9595b8835be779202718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
