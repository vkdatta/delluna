export const name="exit_to_app-fill";
export const id="dl_606c8767d6aa54cf954c";
export const url=new URL("../icons/exit_to_app-fill.svg?v=37e173fad66f81fb65864fce374e7dabd90fe2881eafc12e66e3f9e273d71c54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
