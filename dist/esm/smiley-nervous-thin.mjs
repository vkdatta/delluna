export const name="smiley-nervous-thin";
export const id="dl_99874f344db132f28def";
export const url=new URL("../icons/smiley-nervous-thin.svg?v=fa13bc256fec94d683473890fb005436720395074c8a200dbb458aec944a7a7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
