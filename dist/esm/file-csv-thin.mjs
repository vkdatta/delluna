export const name="file-csv-thin";
export const id="dl_74d8ddb77b794a99b169";
export const url=new URL("../icons/file-csv-thin.svg?v=eefe75d174bd1e3f83bc4bd2ddf97a250ff19c4fdb69ff73edc1070286295dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
