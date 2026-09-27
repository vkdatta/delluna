export const name="align-right-simple";
export const id="dl_1a673e48696c4cd09b40";
export const url=new URL("../icons/align-right-simple.svg?v=0a6945ff0bd3b9af035d2dbd22e1910e13d912ed2e9faf246c2c5315901218a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
