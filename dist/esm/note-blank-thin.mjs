export const name="note-blank-thin";
export const id="dl_fcd43b5474464742a417";
export const url=new URL("../icons/note-blank-thin.svg?v=72a297555a2b441f1a57ae081178b96df744274d8aa385152c7c8e6cb1af207b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
