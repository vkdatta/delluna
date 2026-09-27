export const name="cassette-tape-light";
export const id="dl_396c04df83d14bc1baf9";
export const url=new URL("../icons/cassette-tape-light.svg?v=dba6b0acd8ba2ed2b59c3625fe59def6373da27f93d58c14e0a3f0b9c8140807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
