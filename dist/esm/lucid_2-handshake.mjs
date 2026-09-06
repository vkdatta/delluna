export const name="lucid_2-handshake";
export const id="dl_aebb284a616a445ab8cc";
export const url=new URL("../icons/lucid_2-handshake.svg?v=c006f934cbd97eb89e72a7677f88d159a6050926bd411aad0db6e822caeb84f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
