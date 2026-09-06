export const name="align-right";
export const id="dl_4bb1615676b74f50b7d2";
export const url=new URL("../icons/align-right.svg?v=8d09007324b1407441a93e79fec6fd3a9bd99af3ccbd53bc1ce8445090ad5978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
