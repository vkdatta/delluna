export const name="lockers-thin";
export const id="dl_fa7d6a9655f34f73be55";
export const url=new URL("../icons/lockers-thin.svg?v=f0c3797d4c36b528f0faf16e51f9868864bf21df10403172765b371cfb221ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
