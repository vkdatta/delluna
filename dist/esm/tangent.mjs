export const name="tangent";
export const id="dl_91f588d0479c42f289b7";
export const url=new URL("../icons/tangent.svg?v=c47ead2ebdb992dd2e2837ee148e9cec28a0f59b0dbc7e78bbf9c9cc671650ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
