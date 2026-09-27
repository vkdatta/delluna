export const name="linkedin-logo-thin";
export const id="dl_351c81e8db95466fb66a";
export const url=new URL("../icons/linkedin-logo-thin.svg?v=b40799d544443918a3405e324459e794e2b0a7d9acca1a8bc070b52212dc6ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
