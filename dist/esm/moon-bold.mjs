export const name="moon-bold";
export const id="dl_e877e9b4f4a14d45a102";
export const url=new URL("../icons/moon-bold.svg?v=a7c2585ba405cda2f7d20620244bb68955b93928f671f853a82451458c72b10c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
