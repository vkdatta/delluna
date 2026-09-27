export const name="note_stack-fill";
export const id="dl_94be73121d15f41130da";
export const url=new URL("../icons/note_stack-fill.svg?v=9064b6654a8e327605c12989d4ba50001838e87ec55bce987249e3acfa390278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
