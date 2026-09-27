export const name="credit_score";
export const id="dl_1936882ce09f625ed2e2";
export const url=new URL("../icons/credit_score.svg?v=6b4d187ae7abd57f5f2e104188131b20ede0f715f8e457e549662ecfeb21bdcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
