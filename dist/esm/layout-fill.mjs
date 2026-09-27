export const name="layout-fill";
export const id="dl_9e167180049c42978fc5";
export const url=new URL("../icons/layout-fill.svg?v=45ebf3eaa4d43ee2819ee02e8e6ccb5960ddfb807a9117fd2f9cc8dd46911326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
