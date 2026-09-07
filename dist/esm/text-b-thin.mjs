export const name="text-b-thin";
export const id="dl_cc58a5f2221d4c4aaea6";
export const url=new URL("../icons/T/text-b-thin.svg?v=bc78b565d6d8a593db49ca26c7b12c6effe877dfa9fd8739344239f9ea00b9c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
