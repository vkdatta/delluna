export const name="arrow_drop_up-fill";
export const id="dl_5ea77feb8c4640f9b783";
export const url=new URL("../icons/arrow_drop_up-fill.svg?v=fa650b502cefba2cf61333602d93f6c95c716bdc94a9c16cf03fa1eb953d6aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
