export const name="arrows-in-simple-fill";
export const id="dl_ee902b8b6c234ee2b6ca";
export const url=new URL("../icons/arrows-in-simple-fill.svg?v=6c31b910747e3dae30d913a75ad21d08fa71cdd3ac6116c97ec892dc61663705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
