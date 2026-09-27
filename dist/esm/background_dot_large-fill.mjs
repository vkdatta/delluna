export const name="background_dot_large-fill";
export const id="dl_1b62938ae9af5274d946";
export const url=new URL("../icons/background_dot_large-fill.svg?v=8ffd43dfc4240e5eef7528a484be255c89c6d430175b4899aeaa4a4957d92033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
