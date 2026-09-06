export const name="file-csv-thin";
export const id="dl_74d8ddb77b794a99b169";
export const url=new URL("../icons/file-csv-thin.svg?v=e6a857d6f5c3748e94e60416c28616d97bdbc9ada90cd177f158f945ef4d42b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
