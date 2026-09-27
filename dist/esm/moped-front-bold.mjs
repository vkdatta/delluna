export const name="moped-front-bold";
export const id="dl_79745c8da8af45f6895f";
export const url=new URL("../icons/moped-front-bold.svg?v=b86b6f3ab1693ee92e67efcaf26cf2be83f10793dc31933c232edd36df546edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
