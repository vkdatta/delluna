export const name="move_up-fill";
export const id="dl_37c5ac068ea433110fba";
export const url=new URL("../icons/move_up-fill.svg?v=bb3061df6b7b03d6a7a7afa52c76fe9b227f63f790bff8f1cd958a5fe46e99b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
