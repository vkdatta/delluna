export const name="broom";
export const id="dl_647f8e11a520475baad9";
export const url=new URL("../icons/broom.svg?v=5f05ff0c2c073b6eb246a906a59e27f328c72ce38aff5c9acd7993219a6d8194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
