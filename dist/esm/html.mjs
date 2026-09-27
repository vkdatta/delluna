export const name="html";
export const id="dl_532952e79cc87a4b5c8d";
export const url=new URL("../icons/html.svg?v=09672fc767383df830a58840fab44641a5f93d1153980b423e988d6e9da79f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
