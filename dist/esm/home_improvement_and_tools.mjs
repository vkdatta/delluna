export const name="home_improvement_and_tools";
export const id="dl_774a198c28a8a78ae3a8";
export const url=new URL("../icons/home_improvement_and_tools.svg?v=2dd62d77b61054e814358fa22e934dcc0c9ce4faa91e849c92a39c394ab441d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
