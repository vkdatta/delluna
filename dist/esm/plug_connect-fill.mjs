export const name="plug_connect-fill";
export const id="dl_784d60f6220ba5eb47be";
export const url=new URL("../icons/plug_connect-fill.svg?v=c61f20677c260de5d505fd49f2fcea8c3e43ecc0bb8a236b557abab3ca663c25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
