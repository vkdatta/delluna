export const name="soup_kitchen";
export const id="dl_9c9623d4cecd858c8a61";
export const url=new URL("../icons/soup_kitchen.svg?v=f32dcb13408daa105eac37b9710690f87b9db47746b1a49bf8c69b7411b21cc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
