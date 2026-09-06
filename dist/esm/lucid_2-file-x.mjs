export const name="lucid_2-file-x";
export const id="dl_1e0d565c583a4ad0a659";
export const url=new URL("../icons/lucid_2-file-x.svg?v=47ffd67ed7b0e4719479eefcd24ec109f27335687d4a4ec68f2a4140379a2d28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
