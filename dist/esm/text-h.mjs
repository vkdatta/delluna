export const name="text-h";
export const id="dl_f1bde45eb1c7dcf78dfa";
export const url=new URL("../icons/text-h.svg?v=1dbc3f918d65d5ecda1bbe9679032b48190cb057a77bb2af2ac89d618774b4b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
