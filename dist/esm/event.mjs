export const name="event";
export const id="dl_94ecf1c9ed54c0096139";
export const url=new URL("../icons/event.svg?v=02a114875155d37237f57c0bb181a6ba80475b4e54c123c763ac1fa0abd7c885",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
