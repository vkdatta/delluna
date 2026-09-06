export const name="question-mark-fill";
export const id="dl_0de55f2a150d4dd7b042";
export const url=new URL("../icons/question-mark-fill.svg?v=e3f4cc0cdfc483928ee7e06430fe9ebf8493986f78939a0aab33da362548aefd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
