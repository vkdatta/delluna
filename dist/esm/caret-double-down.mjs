export const name="caret-double-down";
export const id="dl_b15f7467b5524a6cbec2";
export const url=new URL("../icons/caret-double-down.svg?v=932ccb93a9c8167b2e6938d87a47f42f14fe93eeae117a9d14f6dbbf11cae9b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
