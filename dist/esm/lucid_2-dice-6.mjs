export const name="lucid_2-dice-6";
export const id="dl_4b030d550ddc4536901c";
export const url=new URL("../icons/lucid_2-dice-6.svg?v=fc6fb9e0d85b2c8c7ab71d7f3adce6c5b4257ca3b6d6a5f3cc059f9cfee6b59e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
