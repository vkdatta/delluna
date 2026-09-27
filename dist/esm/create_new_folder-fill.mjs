export const name="create_new_folder-fill";
export const id="dl_013079115c3d1a2f183f";
export const url=new URL("../icons/create_new_folder-fill.svg?v=c879d14ee06129eb8b004bf86b38efeab0e1326ffe435fa0c5972129f23953b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
