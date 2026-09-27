export const name="move_to_inbox-fill";
export const id="dl_329029a7d019a83fce45";
export const url=new URL("../icons/move_to_inbox-fill.svg?v=467de2af8484f593b35cc0efbfc7b610222271806eb6b324592fcc2469bd0c58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
