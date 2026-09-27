export const name="file-csv-light";
export const id="dl_61f729be7f284974ad2a";
export const url=new URL("../icons/file-csv-light.svg?v=44f2083819af52006b9eccfdce6d3bb637748663832c9bb611d3a8c62bf50b17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
