export const name="text-h-four-duotone";
export const id="dl_3a21f41a4572315d451d";
export const url=new URL("../icons/text-h-four-duotone.svg?v=340ee3f3bb77b3e9dfbb46bf31c3163e1650f6ebb634ebb729ec4f34f4c14a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
