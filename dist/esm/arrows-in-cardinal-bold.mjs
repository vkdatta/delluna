export const name="arrows-in-cardinal-bold";
export const id="dl_088ab09947f7488d9d39";
export const url=new URL("../icons/arrows-in-cardinal-bold.svg?v=c0a88e561396512eb12a5abf3d83929895227919c2b95bafd9b759ae2512d9d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
