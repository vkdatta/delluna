export const name="lucid_3-mouse-pointer-click";
export const id="dl_b65665829d7646058e87";
export const url=new URL("../icons/lucid_3-mouse-pointer-click.svg?v=a0455aa0f3577df90c165ecd3c16fd0fbf3eaea9ef5370fdfcddf6a50afe3471",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
