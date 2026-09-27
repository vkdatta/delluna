export const name="bell-z";
export const id="dl_07e9e0cacbd94c24a434";
export const url=new URL("../icons/bell-z.svg?v=4117084f7114816fed62616f793bdb0de6c16529ea4763c18e892260ca7d3b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
