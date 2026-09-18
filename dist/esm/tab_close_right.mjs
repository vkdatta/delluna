export const name="tab_close_right";
export const id="dl_b198406c15034c2f9b2f";
export const url=new URL("../icons/T/tab_close_right.svg?v=aae9e436158a4ad808fca59ec309aa38a881e05cbeb71f522315782c74a1455b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
