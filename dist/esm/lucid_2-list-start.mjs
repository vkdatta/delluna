export const name="lucid_2-list-start";
export const id="dl_cdd141ad8118466a908e";
export const url=new URL("../icons/lucid_2-list-start.svg?v=bfd0285e291d4d5d1c6e1ae2f0f31ab75caf0c6a8685e27e02fbb068c55dfafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
