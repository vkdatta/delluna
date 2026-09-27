export const name="meta-logo";
export const id="dl_a8059a908df54d97b9b5";
export const url=new URL("../icons/meta-logo.svg?v=c23743f7fe98a056151880f96004412a7c450991aa684568e4fd75b4565671eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
