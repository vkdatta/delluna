export const name="keyboard_double_arrow_right";
export const id="dl_9a0d1129cafe78edf916";
export const url=new URL("../icons/keyboard_double_arrow_right.svg?v=61f441f1cfcf78af5ba25e7de926b81158309843623d6962c3ed54376a0646a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
