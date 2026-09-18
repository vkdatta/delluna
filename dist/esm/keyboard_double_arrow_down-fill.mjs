export const name="keyboard_double_arrow_down-fill";
export const id="dl_36d52d2b72b848759d11";
export const url=new URL("../icons/keyboard_double_arrow_down-fill.svg?v=5c0fa5fb0a17132d480d0a61ee0ce69cb84961a97ec4df96b64fbcb1fbc7a947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
