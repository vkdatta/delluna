export const name="mouse-right-click-duotone";
export const id="dl_595fde19b3b341879da7";
export const url=new URL("../icons/mouse-right-click-duotone.svg?v=8825f7b4d3fdc0054a3ee9454558b3c12854c4f91b432ba6e8e3b7946cc06496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
