export const name="lock-simple-thin";
export const id="dl_125129685fc3453fa2f8";
export const url=new URL("../icons/lock-simple-thin.svg?v=1696b713c73e280895d3e11e4f49c17b97c015b4f791e94eeb82c1cc01ff22bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
