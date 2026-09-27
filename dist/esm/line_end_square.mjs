export const name="line_end_square";
export const id="dl_f801734fb7d70fe446d5";
export const url=new URL("../icons/line_end_square.svg?v=9c93af9f88a3ab5c7b2ce7aaea444be4931fa5057894d6c036fdb44dc7707434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
