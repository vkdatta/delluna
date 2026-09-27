export const name="sauna";
export const id="dl_a0ff2144c06f727d472b";
export const url=new URL("../icons/sauna.svg?v=1e86a2ea868ed2508e09891c19a212c8b8223dc5de9f27f88c2b24218afc8d14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
