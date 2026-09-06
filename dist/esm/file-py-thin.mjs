export const name="file-py-thin";
export const id="dl_97245c0971914bec8406";
export const url=new URL("../icons/file-py-thin.svg?v=a9c66aafef35e6433b594d08535df14fa6d647c812008ab4805f8d8f903757f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
