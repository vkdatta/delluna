export const name="ear";
export const id="dl_380f47db21ec46ba8f56";
export const url=new URL("../icons/ear.svg?v=583fa8e04832a99eb0ff68445a13d28b90218a935ec454ae1a43d99399cd2014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
