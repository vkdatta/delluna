export const name="projector-screen-thin";
export const id="dl_e4e73cd52c9c46d99076";
export const url=new URL("../icons/projector-screen-thin.svg?v=48e940ef1f1bef5d10c4bcbcbf8bf642c85628b3d2eca265c5df0a3dfbb827d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
