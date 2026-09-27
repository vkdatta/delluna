export const name="sticky_note";
export const id="dl_b38f72d118a82822ccec";
export const url=new URL("../icons/sticky_note.svg?v=ec1b91611f47c4118d90aaead4b6ecefa0dd97b43b8d0d23ff59155446356ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
