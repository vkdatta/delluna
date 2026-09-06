export const name="dots-six-vertical-thin";
export const id="dl_429a9ecdde024889b6f1";
export const url=new URL("../icons/dots-six-vertical-thin.svg?v=46d8425d3206cbe279065039e624ceabd64943649126efae9b1d6c7941fe5a2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
