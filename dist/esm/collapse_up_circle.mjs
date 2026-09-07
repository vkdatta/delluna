export const name="collapse_up_circle";
export const id="dl_3d521d6996c34cf1832d";
export const url=new URL("../icons/all_60_named_svgs/collapse_up_circle.svg?v=4e408aa8a6f21e1a670077ed32f7e44dc813d66813e8165d5c1b313aa7d93706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
