export const name="move_selection_right";
export const id="dl_bd9d046312811ba47d96";
export const url=new URL("../icons/move_selection_right.svg?v=fd1a813098d91bde25055a88dcff42f3420655944737f697ca498e0f7e9be778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
