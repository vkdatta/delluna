export const name="table";
export const id="dl_b83f8fff8b868d19004d";
export const url=new URL("../icons/table.svg?v=d31f9d90fba01372088a8dd3666a7bb8edae6b233383850481cc791536adce5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
