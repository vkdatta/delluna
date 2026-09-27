export const name="square-split-vertical-bold";
export const id="dl_01b6ac6c454eb54501ba";
export const url=new URL("../icons/square-split-vertical-bold.svg?v=419135f69c0e080d9af8dd48521c07d250703f9551b713a6a630c8ca364d1cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
