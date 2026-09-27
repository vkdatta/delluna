export const name="chevrons";
export const id="dl_f69cd2bcc85441c9965d";
export const url=new URL("../icons/chevrons.svg?v=e1260ff642a8766743b38bb05cc93aeee3f9630a72b1742cefb9d4c2791ebf8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
