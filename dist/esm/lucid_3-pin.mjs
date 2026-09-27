export const name="lucid_3-pin";
export const id="dl_6ede4a5f89724d77b1dc";
export const url=new URL("../icons/lucid_3-pin.svg?v=09eef10bffa8da6bcbfaae4f149b9229d8c6b370b12ac345ae746280b9eaa959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
