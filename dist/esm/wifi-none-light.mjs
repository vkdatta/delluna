export const name="wifi-none-light";
export const id="dl_f57a17d846e4d3b90fa1";
export const url=new URL("../icons/wifi-none-light.svg?v=ac797d1408a9bb74fb55a6dcc04430184af663ec4267acf8273f351b14a1675c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
