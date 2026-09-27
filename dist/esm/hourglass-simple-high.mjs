export const name="hourglass-simple-high";
export const id="dl_0b4c48eeeefd48ccbe7e";
export const url=new URL("../icons/hourglass-simple-high.svg?v=a1befa87c054899379daab1b08b78441d9e4b317bb3e32bf3c946a3eec550e86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
