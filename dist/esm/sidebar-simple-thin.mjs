export const name="sidebar-simple-thin";
export const id="dl_4121801eca3d4ddaa5fb";
export const url=new URL("../icons/S/sidebar-simple-thin.svg?v=d6f57a9ba11d4f5e73d924504dc390e69bc69509c43f1045ee6f12af071fba2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
