export const name="shuffle-simple-bold";
export const id="dl_ce2ec6805bf7fab45753";
export const url=new URL("../icons/shuffle-simple-bold.svg?v=93493f472026999092ab5ae4e9684723929f872d7e179e38a02f2ac9c499f947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
