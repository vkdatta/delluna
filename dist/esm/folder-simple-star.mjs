export const name="folder-simple-star";
export const id="dl_85ad9cc81fd84f258190";
export const url=new URL("../icons/folder-simple-star.svg?v=ac57d0bbf8b0ac1d7c36c7af0066ac83419e9bd0c83505cdd26864dd99940613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
