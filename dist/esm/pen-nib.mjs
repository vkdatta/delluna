export const name="pen-nib";
export const id="dl_ab6ad5fcd1874003b9a7";
export const url=new URL("../icons/pen-nib.svg?v=413b462fa00751c09f63fc084f8abc6029d35ba8aa5f231b5d53957d2ec53bb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
