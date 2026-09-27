export const name="tag-light";
export const id="dl_a3705d143a720869fb57";
export const url=new URL("../icons/tag-light.svg?v=28a064f3c91ac4b47ddadaee7ad6baa25e87b5bf1ad46ef4364e9226bd79eb87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
