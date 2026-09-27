export const name="ghost";
export const id="dl_dac37bbc146a4f94ada3";
export const url=new URL("../icons/ghost.svg?v=97cbdb0d3c14a5fba087829bb41836bcc055a439cd2001ac088b8fb9b548f919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
