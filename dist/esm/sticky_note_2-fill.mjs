export const name="sticky_note_2-fill";
export const id="dl_e3af08c2642e288bedef";
export const url=new URL("../icons/sticky_note_2-fill.svg?v=e34a4455dc8e8937af4e56ce65fa46fabba4af94c12945913c43a1b48eb4d198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
