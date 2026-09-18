export const name="mood_heart-fill";
export const id="dl_e3a870338ced4bb7b5eb";
export const url=new URL("../icons/mood_heart-fill.svg?v=63214fd08df0b5203393cee804c8838dd27426a570a40a1fe4641afd221b8eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
