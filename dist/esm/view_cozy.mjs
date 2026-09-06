export const name="view_cozy";
export const id="dl_26dfa6f0c9b1d2845c64";
export const url=new URL("../icons/view_cozy.svg?v=056520ac9439bb4ed626784ee4d6e925d77cd0f541be3b70c573f119bb72c67a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
