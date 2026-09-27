export const name="nest_farsight_cool";
export const id="dl_abc8beec25e8d43fe14a";
export const url=new URL("../icons/nest_farsight_cool.svg?v=21140f4b17e48fca8492d3c4839a7eb8c58a606d16a73539a83f50bf5a39fd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
