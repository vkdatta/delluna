export const name="recent_actors";
export const id="dl_2dd7f1f54b384f4eb3cf";
export const url=new URL("../icons/R/recent_actors.svg?v=f28fd7e4d8c4cd9486d81726f6b4940050093bc0b3f620f5c2b357a26ea7e614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
