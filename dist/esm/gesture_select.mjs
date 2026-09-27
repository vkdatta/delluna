export const name="gesture_select";
export const id="dl_0a5aae2ecdc34d5a06f8";
export const url=new URL("../icons/gesture_select.svg?v=6520d68b647edaf3119fcc12e98c859f52396575c0ad8d57c248feb87bd852ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
