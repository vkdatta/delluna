export const name="align-center-horizontal-simple-thin";
export const id="dl_692b2ca677b144e3b522";
export const url=new URL("../icons/align-center-horizontal-simple-thin.svg?v=1d9a9f5a58d6a81fde308bbd24dedaf5f491237c899229a166afdf9b228a751a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
