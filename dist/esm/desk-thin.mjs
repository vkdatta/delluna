export const name="desk-thin";
export const id="dl_86baf7cec1904b9bb36d";
export const url=new URL("../icons/desk-thin.svg?v=570c77df764f74eaf88a830139df749e4b97c80be027b361863670cf329362d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
