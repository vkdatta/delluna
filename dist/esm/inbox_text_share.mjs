export const name="inbox_text_share";
export const id="dl_2483ba5f47c74dd2b2c0";
export const url=new URL("../icons/inbox_text_share.svg?v=ec24aa71e6781498440018c5632aeaa92a4ddc172d893d7a35849c42cc37749a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
