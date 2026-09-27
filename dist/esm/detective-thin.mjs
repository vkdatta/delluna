export const name="detective-thin";
export const id="dl_9140e42765ff4374a0aa";
export const url=new URL("../icons/detective-thin.svg?v=7c2088f14f756f7573b17bc351917dd979e3c51ca7ad74a89abd7763fc545243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
