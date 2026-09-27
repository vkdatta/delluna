export const name="lucid_3-panel-top-close";
export const id="dl_8fa3ff1146354206bf12";
export const url=new URL("../icons/lucid_3-panel-top-close.svg?v=efa21b803dba990259df60cf6f704bbc66d71a9e86fd86007a7c078af61d784f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
