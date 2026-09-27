export const name="lucid_3-refresh-ccw";
export const id="dl_4cf5da966b94416daf9d";
export const url=new URL("../icons/lucid_3-refresh-ccw.svg?v=af1c3098ef855e0d17fabacfe12b36b53fc4625c48943e51f6adababff319482",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
