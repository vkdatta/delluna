export const name="support-fill";
export const id="dl_c00824bdb9c89fa02560";
export const url=new URL("../icons/support-fill.svg?v=c40303ea8c5f0e45659654512fa0fd57d031a3ab9db78f3be14186b2dd0079a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
