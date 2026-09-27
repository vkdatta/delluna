export const name="ad_group";
export const id="dl_8da23ad23347eecd1393";
export const url=new URL("../icons/ad_group.svg?v=d8876c4dceab341b876bf6bdb6f0df42e3d75bf49860f6ae0eac1383a39ae49b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
