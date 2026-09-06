export const name="chat-circle-slash-light";
export const id="dl_c48033967f154346b740";
export const url=new URL("../icons/chat-circle-slash-light.svg?v=ff72236615da08fd4ebebd3146ce57b748f4663fd00c73bae1f1387e8f4ec018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
