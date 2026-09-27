export const name="keyboard";
export const id="dl_cb54360d3eed4f1a9abe";
export const url=new URL("../icons/keyboard.svg?v=7fa0915c9c567cf5fe6c470336883ecffa02eb6dc180416f11ad02f742ab6754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
