export const name="table-thin";
export const id="dl_6a168a22ffa84bf5b29c";
export const url=new URL("../icons/T/table-thin.svg?v=432f9be4b263dc71d278a45abc4d4e72d1ffae220c5bc1d989e77d8b1c607ae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
