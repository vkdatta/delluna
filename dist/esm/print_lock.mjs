export const name="print_lock";
export const id="dl_faadb5ccd71549d58207";
export const url=new URL("../icons/print_lock.svg?v=32f5dd7f076e25bd92946909804efa4753c4cfc2560310b5234022a825491aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
