export const name="trash-thin";
export const id="dl_2ac53cbe4987682bd3c7";
export const url=new URL("../icons/trash-thin.svg?v=fe8339f06e14c15ec68a7fdf002ab2a59ea8d0bdbbfbd011ee1316b62e07c075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
