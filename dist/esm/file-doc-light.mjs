export const name="file-doc-light";
export const id="dl_0882577dd03240918e26";
export const url=new URL("../icons/file-doc-light.svg?v=90b8ed74cd1585b1f7ad4a8a293807192278fe80abf3c104e786ee39548af619",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
