export const name="bug-droid-thin";
export const id="dl_91be3e5b29704d569148";
export const url=new URL("../icons/bug-droid-thin.svg?v=32db6972ad42f30b72724273175789a0367a4157eec028181991131d97ea739a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
