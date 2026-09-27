export const name="lucid_2-hat-glasses";
export const id="dl_cae074d8d760488dab0f";
export const url=new URL("../icons/lucid_2-hat-glasses.svg?v=1fb0059fc60fa76115b31b841d7f934d3e41f9e10d5c107fd1891063f462ddf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
