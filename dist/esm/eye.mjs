export const name="eye";
export const id="dl_9395a5f8b084472e94d5";
export const url=new URL("../icons/eye.svg?v=666f9963e8bec79960f8d7ed357a3cd695e2af0911b3ee49cf6fbb5cb23f6a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
