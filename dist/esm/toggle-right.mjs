export const name="toggle-right";
export const id="dl_cefb0ae0bad64c1685b6";
export const url=new URL("../icons/toggle-right.svg?v=3b0aedd2a07e41e47c7e99f6cc9c79ea67e2616ba204da50a76f1a0cc4b5d1b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
