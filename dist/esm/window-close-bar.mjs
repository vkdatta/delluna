export const name="window-close-bar";
export const id="dl_5e5801c5fe624391bf8d";
export const url=new URL("../icons/close/window-close-bar.svg?v=3c647eddf934065675decfad6a3f50f1389dca1e5efb7a95e207b33be3617977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
