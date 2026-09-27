export const name="person-simple-circle-thin";
export const id="dl_5ac5ebbf629f4297b4b1";
export const url=new URL("../icons/person-simple-circle-thin.svg?v=4690c8ed2df251ff9f3938619c4bb21d8d62c688edf74bd32fae7e0dd3a6e775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
