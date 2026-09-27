export const name="lucid_2-focus";
export const id="dl_37217cdd281c4b4a9e32";
export const url=new URL("../icons/lucid_2-focus.svg?v=bd869f3ed78cca19867cc903d984e4c316b8ceb9a41fcf74a8e2cdb2ee746eb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
