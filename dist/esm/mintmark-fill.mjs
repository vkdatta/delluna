export const name="mintmark-fill";
export const id="dl_9f59a08981900d7fe4b2";
export const url=new URL("../icons/mintmark-fill.svg?v=f84823ad3ff6990ee87500b647b7599aae9aaa6d58f1240aaf2c9cd92d6abcb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
