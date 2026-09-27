export const name="note-blank-bold";
export const id="dl_0fc04c4f50dd4593bcf4";
export const url=new URL("../icons/note-blank-bold.svg?v=c22724a0ffe18af94b011944614e0db57817f4565a1ad6f2fbdf728874eee453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
