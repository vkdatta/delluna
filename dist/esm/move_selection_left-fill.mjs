export const name="move_selection_left-fill";
export const id="dl_f7ea0103a8f042ffa6cf";
export const url=new URL("../icons/move_selection_left-fill.svg?v=50cec9d2e996315c0212cb9f9a483613afc961d8b394956e1bdef9aa6a1b3090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
