export const name="mouse-left-click-light";
export const id="dl_3d7d99b303f8460e833d";
export const url=new URL("../icons/mouse-left-click-light.svg?v=9b236d51bdd3980a760bdba339409555a243e9dcf16296fb3a3415c7a4a943ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
