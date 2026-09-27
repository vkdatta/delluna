export const name="lucid_1-circle-pound-sterling";
export const id="dl_3a9a07936043433a8084";
export const url=new URL("../icons/lucid_1-circle-pound-sterling.svg?v=301c7b36c04dbdb6b4b8a7f7ffcd8c584381608dc45c1989d94c1aec4597651e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
