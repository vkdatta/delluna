export const name="window-close-bar";
export const id="dl_74ccce149ed395f10a73";
export const url=new URL("../icons/window-close-bar.svg?v=3c647eddf934065675decfad6a3f50f1389dca1e5efb7a95e207b33be3617977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
