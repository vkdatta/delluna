export const name="expand_circle_up";
export const id="dl_2725404acbb049c5b938";
export const url=new URL("../icons/E/expand_circle_up.svg?v=13c3a5267574418b8a0f426480b88ec1dc521574373323ce097e99352a3879b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
