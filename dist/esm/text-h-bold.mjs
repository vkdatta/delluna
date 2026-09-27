export const name="text-h-bold";
export const id="dl_159806f5d24c7d7db69b";
export const url=new URL("../icons/text-h-bold.svg?v=92b55057a0687068a6464022ec75336124c7cf27f4f53da68240d979c84b9d35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
