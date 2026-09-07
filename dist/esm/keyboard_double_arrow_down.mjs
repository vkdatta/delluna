export const name="keyboard_double_arrow_down";
export const id="dl_d8b4c3fbb84b7810c120";
export const url=new URL("../icons/keyboard_double_arrow_down.svg?v=441f70296173026b431580583b9c697cfd6ee2457643fd33243a6e1e11727965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
