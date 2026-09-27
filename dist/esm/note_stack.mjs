export const name="note_stack";
export const id="dl_98676d4ac74a1f94b658";
export const url=new URL("../icons/note_stack.svg?v=4415b1f5ca2af1eca489540870b6ca51fbae40e77c837e6bae8cf2afada9cdbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
