export const name="line_start_diamond";
export const id="dl_152ec9272f53d6961843";
export const url=new URL("../icons/line_start_diamond.svg?v=f2b78134f378ec4c04f17e206da442f12ad15a843c21609dd0071bc3cca2ec8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
