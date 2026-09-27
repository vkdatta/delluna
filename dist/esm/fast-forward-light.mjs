export const name="fast-forward-light";
export const id="dl_ce25d150d07149c9be70";
export const url=new URL("../icons/fast-forward-light.svg?v=035c7061d577c2ded3b1e960038d1b11577de3a3df68d39f9f46293ff4e6ad9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
