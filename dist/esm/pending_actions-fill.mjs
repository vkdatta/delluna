export const name="pending_actions-fill";
export const id="dl_d62afffce0a4dc0f244e";
export const url=new URL("../icons/pending_actions-fill.svg?v=daa0ac34738d98be90fbe24ae3e544f93ba15cf2b041c4d7fb42a7754aaaa18d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
