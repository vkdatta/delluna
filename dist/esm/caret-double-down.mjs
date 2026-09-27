export const name="caret-double-down";
export const id="dl_b15f7467b5524a6cbec2";
export const url=new URL("../icons/caret-double-down.svg?v=05c6d60da67bc5e40ee9c229a6381e8efe08ee711460461167c00a4a14e881ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
