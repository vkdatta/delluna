export const name="caret-circle-double-down-thin";
export const id="dl_101dfb467aef4d5594a0";
export const url=new URL("../icons/caret-circle-double-down-thin.svg?v=d435c72c7d7b87ae0bb7125be1f807a151f2db67b22b8a0149609fb22764aef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
