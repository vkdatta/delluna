export const name="select_window";
export const id="dl_3c4aad65bc895c62e0f6";
export const url=new URL("../icons/select_window.svg?v=41e814d07997d4c7de4d7ec0e4d7fd8488e004731fc79a41649d2d5185ca3c4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
