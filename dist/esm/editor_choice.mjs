export const name="editor_choice";
export const id="dl_8d73f07734ef4525bf39";
export const url=new URL("../icons/E/editor_choice.svg?v=2ec019d5792b8998964d440eeac0b3b046b20711cdd8f491bef7ccf8d8ae01a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
