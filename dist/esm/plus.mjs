export const name="plus";
export const id="dl_217bda60a5aa7e5f4edd";
export const url=new URL("../icons/plus.svg?v=1c626a433830e2551aff400fa045247841bb223ee96e1314ba0be7c5eecf92d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
