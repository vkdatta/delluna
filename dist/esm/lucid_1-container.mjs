export const name="lucid_1-container";
export const id="dl_3ce83f39d5fd40b991f7";
export const url=new URL("../icons/lucid_1-container.svg?v=4a4ebd6ba4e40a13a231718986fa29e6890778c3a606339c2513d866d58af1d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
