export const name="suitcase-rolling-fill";
export const id="dl_725c8b5f12714a1199a6";
export const url=new URL("../icons/S/suitcase-rolling-fill.svg?v=45ba3f9724e76b951bcdd6da1ad01217ae9b405c55ea1012205f15523bcb1cd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
