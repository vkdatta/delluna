export const name="globe-x-duotone";
export const id="dl_60fb909c5b084a48b1a7";
export const url=new URL("../icons/globe-x-duotone.svg?v=48bd1a57c9ed8e8c4797f68a2d45a49acd618320f2640c6589ed79be0c7119a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
