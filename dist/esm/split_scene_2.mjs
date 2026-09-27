export const name="split_scene_2";
export const id="dl_db06672190593b05f62a";
export const url=new URL("../icons/split_scene_2.svg?v=566650ecd3a78d183f440a8475ceaf54468a4909ef1824ec66e19352f4ecb989",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
