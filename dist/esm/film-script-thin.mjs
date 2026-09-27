export const name="film-script-thin";
export const id="dl_86c852ec3a524391a7ee";
export const url=new URL("../icons/film-script-thin.svg?v=ce2462a2e04889e121d0452da3ef521a34e209b54c86b9d628bd69337ef2c282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
