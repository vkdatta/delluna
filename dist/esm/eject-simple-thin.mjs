export const name="eject-simple-thin";
export const id="dl_61806565806d40aabc8e";
export const url=new URL("../icons/eject-simple-thin.svg?v=48590c1f7386fcdc31b4e75e86ec6b5590980683560cd3a8298f1b7b8511e7bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
