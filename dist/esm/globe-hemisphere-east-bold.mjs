export const name="globe-hemisphere-east-bold";
export const id="dl_42fa77dd113d42c4b768";
export const url=new URL("../icons/globe-hemisphere-east-bold.svg?v=525306ad5374bac02fc7bb8c8d184997ff8236ca5a356afee591a23cfd350e57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
