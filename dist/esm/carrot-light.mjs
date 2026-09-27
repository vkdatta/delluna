export const name="carrot-light";
export const id="dl_d08c9b193a904943b308";
export const url=new URL("../icons/carrot-light.svg?v=8dd52b6a7f39f010e6109eaaff43bbf5cb92cc0b2999189c5ca1faad86f1a746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
