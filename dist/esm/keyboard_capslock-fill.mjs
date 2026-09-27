export const name="keyboard_capslock-fill";
export const id="dl_b9122d7bdc3e393e4dda";
export const url=new URL("../icons/keyboard_capslock-fill.svg?v=7c8a29e1b02c214ce8ac8ad6c94109006e078d8f2ba285f17ed0f2051d88713e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
