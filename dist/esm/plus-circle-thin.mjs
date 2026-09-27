export const name="plus-circle-thin";
export const id="dl_a12178426ed34b67985b";
export const url=new URL("../icons/plus-circle-thin.svg?v=0f42b7e110546957847571aedd0ead7c2a4358374e6923a1bdba591d47ffbc26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
