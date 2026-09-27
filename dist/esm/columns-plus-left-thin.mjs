export const name="columns-plus-left-thin";
export const id="dl_56f1322c488e48abba42";
export const url=new URL("../icons/columns-plus-left-thin.svg?v=1250cc6c4c9688a8db628f0967f091dbad2b8a8dba5fa0115afd79d4cd249513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
