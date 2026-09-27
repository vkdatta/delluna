export const name="bloodtype";
export const id="dl_ea762968bacf42baeb9e";
export const url=new URL("../icons/bloodtype.svg?v=1d17882cc3c2bb9b1c516ba685d0b36162d14b91aa666d556f10a993e7d0129d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
