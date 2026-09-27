export const name="rewind-circle-thin";
export const id="dl_5da96483416b40cc9f41";
export const url=new URL("../icons/rewind-circle-thin.svg?v=b77d39f3e59bfc726b4a3a8bdb0a614a5908d24e648f4eba794fe0215b7c7699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
