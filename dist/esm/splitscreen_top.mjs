export const name="splitscreen_top";
export const id="dl_0eb719bdceb5e761bac6";
export const url=new URL("../icons/splitscreen_top.svg?v=87d2a9c025fcf039f4cad51b529400efc4215382bc6fac2e5242d3569e3b519b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
