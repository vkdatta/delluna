export const name="windmill-light";
export const id="dl_f1fd5922421e4117786f";
export const url=new URL("../icons/windmill-light.svg?v=958fd84705d785ad7cb828d58807e80cd3ed20d4e33d02541314824d6d965604",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
