export const name="arrows_left_right_circle";
export const id="dl_566b391b63e96354c90f";
export const url=new URL("../icons/arrows_left_right_circle.svg?v=78f66f5f80b6764c4b3749fbbdaaa70e5e62676a5f1f5e5043495dd325e49aa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
