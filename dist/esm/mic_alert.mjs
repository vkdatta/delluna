export const name="mic_alert";
export const id="dl_79f230b1d28f7632db0f";
export const url=new URL("../icons/mic_alert.svg?v=9367bee54b9dda923371f0fcf66df84adb70883ea05db3f2062be2e7d3430a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
