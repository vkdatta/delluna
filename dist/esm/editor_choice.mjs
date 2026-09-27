export const name="editor_choice";
export const id="dl_425801b27de68799ffe8";
export const url=new URL("../icons/editor_choice.svg?v=804ee2fdb19f94ca82ff2e2714ead2722e0157fabc8ca717d4af84be7f09a6b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
