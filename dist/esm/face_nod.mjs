export const name="face_nod";
export const id="dl_de220cc32a59e6472f22";
export const url=new URL("../icons/face_nod.svg?v=424f908989e18e4f28b7bf0d847e33d39ac84ff7852af476560a1e3bad462e33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
