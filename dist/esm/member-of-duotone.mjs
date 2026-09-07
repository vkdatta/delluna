export const name="member-of-duotone";
export const id="dl_9d6bbe4345e0453ca5cc";
export const url=new URL("../icons/member-of-duotone.svg?v=354f99a470757efdae9b605b183312a59af24f1b18a8a57e87b96507b3b64d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
