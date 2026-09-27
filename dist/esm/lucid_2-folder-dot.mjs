export const name="lucid_2-folder-dot";
export const id="dl_e0306f3c2aa24b7c8083";
export const url=new URL("../icons/lucid_2-folder-dot.svg?v=5ff21d93b873f4fc7654bd0b2185a231c3995cefc785cbf27bab8fa3289a5df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
