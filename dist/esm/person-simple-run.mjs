export const name="person-simple-run";
export const id="dl_607ba61c4e81462f9802";
export const url=new URL("../icons/person-simple-run.svg?v=89631ef3ec18b93e0d9c3ca7b400dc14d57c30f5717ad54ba58bd1f58ef8141e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
