export const name="text-initial";
export const id="dl_a22c50ad5704498da77a";
export const url=new URL("../icons/text-initial.svg?v=02813c5a0749129637ccd0443e1bac992c97d58d4a4addee1f987c892e21a35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
