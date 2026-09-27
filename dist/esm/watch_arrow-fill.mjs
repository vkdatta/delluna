export const name="watch_arrow-fill";
export const id="dl_627009be812baea3109a";
export const url=new URL("../icons/watch_arrow-fill.svg?v=039dfcfc9350bdc61cd384edc7260be095b15fcbdff706a8c9dd2ef5a6d30f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
