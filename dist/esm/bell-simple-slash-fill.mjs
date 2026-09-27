export const name="bell-simple-slash-fill";
export const id="dl_8f8f7d2e8a55483186c2";
export const url=new URL("../icons/bell-simple-slash-fill.svg?v=c7a47ba945fdd1c9dafb1dbfdf9b088cd6ed9ffb8fd4afcee9d8eeee24181494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
