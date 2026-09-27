export const name="lucid_2-mail-open";
export const id="dl_251920c22c4b411994b6";
export const url=new URL("../icons/lucid_2-mail-open.svg?v=01ba32d3fc1321cf5500b3eb57c5bd2b47eafe6f788215129052dc30dead76c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
