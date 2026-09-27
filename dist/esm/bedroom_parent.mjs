export const name="bedroom_parent";
export const id="dl_28f467f6630c12ace539";
export const url=new URL("../icons/bedroom_parent.svg?v=d7b66e10ab45449ed1741c5b5c240b614729726275266b6f9e29d1eaf35c7316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
