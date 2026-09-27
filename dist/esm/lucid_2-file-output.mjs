export const name="lucid_2-file-output";
export const id="dl_c6308cfab302497e87b0";
export const url=new URL("../icons/lucid_2-file-output.svg?v=689ef7e53a2d356a0658571b8c8fb35a5e69243882ace8d8bef5034195deb0e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
