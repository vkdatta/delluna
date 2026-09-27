export const name="arrow_drop_up-fill";
export const id="dl_251f580d7b0a9a4419c3";
export const url=new URL("../icons/arrow_drop_up-fill.svg?v=ea1a6be5efbec55c376cf1a7dcd8965391a6ee25f50111291ee75bcb1f1fa1cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
