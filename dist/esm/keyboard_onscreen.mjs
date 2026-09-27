export const name="keyboard_onscreen";
export const id="dl_5df69784ba45515c2d10";
export const url=new URL("../icons/keyboard_onscreen.svg?v=14ce97459a43c1a60981be4160873304ea779e46d3c21ca0ec7d92b0606b7109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
