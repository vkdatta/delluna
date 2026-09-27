export const name="stack-simple-duotone";
export const id="dl_5be5b41c582251d33cdd";
export const url=new URL("../icons/stack-simple-duotone.svg?v=1d423e6e113207dca68d6fa90cba791293dac17504b36440bdd6a2ff8a68e0f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
