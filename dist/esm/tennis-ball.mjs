export const name="tennis-ball";
export const id="dl_cb9cdd6265fd407eb29a";
export const url=new URL("../icons/T/tennis-ball.svg?v=0d650750448e19d47c9776cc01b0c20744ce67d87b025d2a9efbd0bf99f8d312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
