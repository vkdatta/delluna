export const name="note-blank-thin";
export const id="dl_fcd43b5474464742a417";
export const url=new URL("../icons/note-blank-thin.svg?v=c4ce199561d7707c6e7b04e215cbdcabbd6c448841c69dc93fd293268fb8d2e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
