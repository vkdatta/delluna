export const name="desk-thin";
export const id="dl_86baf7cec1904b9bb36d";
export const url=new URL("../icons/desk-thin.svg?v=157651863539fdf5ac48547c48fe9bfbed05e13f8a15280d892b1dc465b3ec47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
