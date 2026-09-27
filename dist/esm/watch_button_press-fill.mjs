export const name="watch_button_press-fill";
export const id="dl_ff60ad60e7ca11868e1b";
export const url=new URL("../icons/watch_button_press-fill.svg?v=6feddc01639b8eddb55d81787bdb785e6e450e57a21cd4d93c324b9c81524d8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
