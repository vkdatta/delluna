export const name="fire-simple-thin";
export const id="dl_fc61fef8993c4c0facc7";
export const url=new URL("../icons/fire-simple-thin.svg?v=e94dd027837f4a2f2df996a2f4e09982a6ac848b58491856d76f226237a45ffc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
