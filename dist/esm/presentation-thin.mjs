export const name="presentation-thin";
export const id="dl_b095ff9726834cbfb7f7";
export const url=new URL("../icons/presentation-thin.svg?v=23514c74ce565e4163ed2a5bd4e41c92280b450cc7b2009bbc8a6b9171509f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
