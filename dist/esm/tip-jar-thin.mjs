export const name="tip-jar-thin";
export const id="dl_d87a7499086bdeb5ceb7";
export const url=new URL("../icons/tip-jar-thin.svg?v=865ce0f8eaa58fa00efc8fd97366882d106d25e4b982d08bc11cedec8cc747f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
