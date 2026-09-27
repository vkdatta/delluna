export const name="jar-thin";
export const id="dl_e870474ff33f4f229aa9";
export const url=new URL("../icons/jar-thin.svg?v=1653b5f387f7fc252438c5e0cff458b89aa2d6b749cbef0a89c8c69a44ce20a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
