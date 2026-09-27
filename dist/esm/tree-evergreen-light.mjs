export const name="tree-evergreen-light";
export const id="dl_a36499c7616713dcf8e5";
export const url=new URL("../icons/tree-evergreen-light.svg?v=141fca761e076888301da405f83f3c5e1fb76acf36f2257743db61c6288ee441",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
