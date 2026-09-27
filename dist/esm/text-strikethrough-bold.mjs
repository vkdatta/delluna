export const name="text-strikethrough-bold";
export const id="dl_6e907035d793ac1dc6b9";
export const url=new URL("../icons/text-strikethrough-bold.svg?v=f859ff65f3f1b92dd3aecef422446539d0f87e0117b6843e7529773dfc93c4e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
