export const name="lucid_1-computer";
export const id="dl_76e82f85969a4e44b390";
export const url=new URL("../icons/lucid_1-computer.svg?v=45ac9ef5e4622abe46d4591ffd912a09cdc22fdf38f8806675498074d52ced02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
