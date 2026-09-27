export const name="person-simple-run-bold";
export const id="dl_b8846ba6eb314ecdabbc";
export const url=new URL("../icons/person-simple-run-bold.svg?v=ae62fc689571389d4e4b81f0fa53871d241ff7ff9c3781b6c11951334ebdb6f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
