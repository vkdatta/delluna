export const name="sleep_score";
export const id="dl_beddd58f89db88b61120";
export const url=new URL("../icons/sleep_score.svg?v=98798af7cde86cc2910d73ec9b8db1c82a48eb8fa56891d8a16b196aa4856f7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
