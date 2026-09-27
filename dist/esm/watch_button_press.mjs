export const name="watch_button_press";
export const id="dl_9762a5a000eef0cbc8c3";
export const url=new URL("../icons/watch_button_press.svg?v=4a051405022ca6d19c54d2d7f1ed3a7f47e341ddd0c84fe086651b8366dcc1bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
