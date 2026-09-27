export const name="exit_to_app-fill";
export const id="dl_c64632cca51892ad1af1";
export const url=new URL("../icons/exit_to_app-fill.svg?v=55248943a5628c3bd6a0fc107ba1957c549a720103313d0ce1eaacafacffdefd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
