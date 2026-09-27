export const name="arrows-out-cardinal";
export const id="dl_9f00c7d53dbb43ff9cc9";
export const url=new URL("../icons/arrows-out-cardinal.svg?v=4ccfd6192d20ffea923fa4305490cf0a6c4c80cd3bdfdaf78effd56c71b51272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
