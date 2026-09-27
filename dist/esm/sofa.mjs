export const name="sofa";
export const id="dl_1a9c35cc01fdfae45347";
export const url=new URL("../icons/sofa.svg?v=c9212b16fe87f2ac8324d00b5f5892f7b32ab78c8be77488b749884f7ee45ce5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
