export const name="siren-fill";
export const id="dl_76de081a85ffc31b0e70";
export const url=new URL("../icons/siren-fill.svg?v=ba3f8d4d6eb08c69f333177aac018d33e01230f5a3cab6447729ed93ad8c6319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
