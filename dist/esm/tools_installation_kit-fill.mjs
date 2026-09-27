export const name="tools_installation_kit-fill";
export const id="dl_49c9db3d155d1bf6f7cb";
export const url=new URL("../icons/tools_installation_kit-fill.svg?v=df623d00502cd8c912c7814aaf47388fcb3c949b1544155cfdff920efc741fbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
