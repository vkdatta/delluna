export const name="link-simple-break";
export const id="dl_3a5177b9e14a4a50ba8e";
export const url=new URL("../icons/link-simple-break.svg?v=768df06c28b1dc0d28aae0164f2e3655fc029359b67784e747fe8513972035a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
