export const name="test-tube-thin";
export const id="dl_799c365f453157c164a0";
export const url=new URL("../icons/test-tube-thin.svg?v=0ebdc28e4f51103115f341733855581c63a993134839eeeed08b7fb21829e1bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
