export const name="drop-simple";
export const id="dl_d4cd8fe355f549159953";
export const url=new URL("../icons/drop-simple.svg?v=a0c402e19fea375d1c89538a0c63a476d56739311e29d6e9224ddb24908c9a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
