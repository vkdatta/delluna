export const name="mobile_code-fill";
export const id="dl_862fc09ca50c42f585e1";
export const url=new URL("../icons/mobile_code-fill.svg?v=4acf39274ceaba45a6ac4544a20d7a6ed252244f26eb0c0b6193524613796e47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
