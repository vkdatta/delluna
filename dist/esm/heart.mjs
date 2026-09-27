export const name="heart";
export const id="dl_39b3883f822f44a6912d";
export const url=new URL("../icons/heart.svg?v=4cf441d8e7a83128a0f8fa85aab11b943214cf76fed1c46a02ce873db10248ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
