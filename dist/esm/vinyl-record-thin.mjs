export const name="vinyl-record-thin";
export const id="dl_e5fa348716b543a2d049";
export const url=new URL("../icons/vinyl-record-thin.svg?v=dbc6c1d7aaf52d7cd6e9d19ce8bf679ef053890cfbd8d6cf1b564a555d68d2f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
