export const name="hand-peace-duotone";
export const id="dl_f6bd647b654a42beb541";
export const url=new URL("../icons/hand-peace-duotone.svg?v=86c4f9c857a2b6123c63575ca7c0781ffdd3143eb778f648305f31f3c8ed6679",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
