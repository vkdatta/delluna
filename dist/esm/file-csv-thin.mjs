export const name="file-csv-thin";
export const id="dl_74d8ddb77b794a99b169";
export const url=new URL("../icons/file-csv-thin.svg?v=5e94b7fab1f29fe36c0fbe2db63411eb00869a47b15fd1bf652ae0b897475a50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
