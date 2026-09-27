export const name="checks-bold";
export const id="dl_0ea8b8eb6e5842b1b175";
export const url=new URL("../icons/checks-bold.svg?v=220515ee07ab6ffd0fdcf46cfaa24f02da93a8c7dedbb555fb09bd920d463016",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
