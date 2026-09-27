export const name="widget_menu";
export const id="dl_f32f9f4c256b0b53071c";
export const url=new URL("../icons/widget_menu.svg?v=f6d6799f4a4d4d22b8405f96898102247aa082772be9aec5c45acf378e0b9cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
