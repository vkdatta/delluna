export const name="lucid_1-calendar-days";
export const id="dl_cc58065c7d2549918471";
export const url=new URL("../icons/lucid_1-calendar-days.svg?v=42a65a1e862d7d587ba80e060d7c8cd7d75e1b685464a02fe9986a0544a5e465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
