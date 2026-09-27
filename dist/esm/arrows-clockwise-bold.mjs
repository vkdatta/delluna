export const name="arrows-clockwise-bold";
export const id="dl_9020b335aaf24fc3b89d";
export const url=new URL("../icons/arrows-clockwise-bold.svg?v=001a264ee7ac1fd758d2901c1f9359998b5b1464d58359bd615695fb0d4306b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
