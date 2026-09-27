export const name="butterfly-fill";
export const id="dl_ce2c7547c2334274bbcc";
export const url=new URL("../icons/butterfly-fill.svg?v=453487830933c3475845d0e451ff7cc41c33444971831847b5bfb1212a77e08f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
