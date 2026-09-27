export const name="type_specimen-fill";
export const id="dl_b8379929c2fb0eadef57";
export const url=new URL("../icons/type_specimen-fill.svg?v=ede615c7d20582a8b3fb224140002fb817c6b0cea49ac1b4984e32f548df69c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
