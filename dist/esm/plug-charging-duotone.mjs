export const name="plug-charging-duotone";
export const id="dl_71766a0693214212b479";
export const url=new URL("../icons/plug-charging-duotone.svg?v=bdef87a2935fbbe8288ea6f059c0a170e82a6fb0b8a2205cfaf73ace6e45d846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
