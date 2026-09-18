export const name="broadcast_on_home";
export const id="dl_5cd00c4216ef430abd16";
export const url=new URL("../icons/broadcast_on_home.svg?v=d55e957c2439e5692e85ac9b5370e453cb9167ddaa180b942a002e7da60d8456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
