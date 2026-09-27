export const name="trophy-fill";
export const id="dl_fd866ad0863c8e57871a";
export const url=new URL("../icons/trophy-fill.svg?v=6102bd180368d4bf1e9ec6813d0442bea2905b8fa3c34b68ae93cc158c33505e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
