export const name="lucid_2-line-style";
export const id="dl_e736ff4752dc47139cf5";
export const url=new URL("../icons/lucid_2-line-style.svg?v=0982f4cfd83c8887134d54d75e2082d41fe8de4d216547985cc6dba62a39bb39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
