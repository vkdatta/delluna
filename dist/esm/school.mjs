export const name="school";
export const id="dl_b2094527b069d2d058da";
export const url=new URL("../icons/school.svg?v=5d691bf8b7e2de2b7da08269ee863ccda477bc510f557a89d270037766cdfa40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
