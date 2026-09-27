export const name="lucid_2-file-pen";
export const id="dl_fa7c975587914e9fb1fb";
export const url=new URL("../icons/lucid_2-file-pen.svg?v=0c93e50596f30bc07be088838195a75ff38f3c45e96aa2b460ea369e69f2f430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
