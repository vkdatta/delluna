export const name="keyboard_hide";
export const id="dl_0914d84b369996a1f1df";
export const url=new URL("../icons/keyboard_hide.svg?v=48afd605226b02dac2455f5cb5802414e4dfbcc39a47c2ef4df82b478916f7c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
