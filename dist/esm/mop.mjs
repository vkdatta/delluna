export const name="mop";
export const id="dl_19749255be462d36906c";
export const url=new URL("../icons/mop.svg?v=83c995540de11d624b1eaa1b57f8e1f7d9cb785cfbad529ebc44e2c1d0f698d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
