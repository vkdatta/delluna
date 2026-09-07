export const name="chevrons";
export const id="dl_f69cd2bcc85441c9965d";
export const url=new URL("../icons/chevrons.svg?v=da4e35049848c9e56e15b94761e0df897aa036e6108ffd7e252dc6936dc23cc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
