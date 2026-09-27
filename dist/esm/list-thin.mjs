export const name="list-thin";
export const id="dl_42ac4600149742199e8f";
export const url=new URL("../icons/list-thin.svg?v=7fd87ad97553ca5fbb2ca52462d61d7cc1fe697f21148a30877346d04a747abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
