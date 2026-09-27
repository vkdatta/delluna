export const name="dots-nine-duotone";
export const id="dl_06df531f554749598e52";
export const url=new URL("../icons/dots-nine-duotone.svg?v=6f792e948e20c7e30036e9a651e78ae44ed48f5c68aa7b76fefb7ad8c48471b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
