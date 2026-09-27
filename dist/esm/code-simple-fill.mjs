export const name="code-simple-fill";
export const id="dl_3c409a766a9f4de995bf";
export const url=new URL("../icons/code-simple-fill.svg?v=f4e53606aa0583818a0a04af52fa46d806f94987e14c9a16b5de19cbfc1334f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
