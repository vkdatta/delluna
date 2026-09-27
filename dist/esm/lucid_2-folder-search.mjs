export const name="lucid_2-folder-search";
export const id="dl_5899bc56c2c74f999628";
export const url=new URL("../icons/lucid_2-folder-search.svg?v=c3216e8b382b3b2fc8e7769184ef79d84da10e28a9f281bc36ec25c0435ff1e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
