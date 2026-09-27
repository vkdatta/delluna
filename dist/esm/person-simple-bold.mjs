export const name="person-simple-bold";
export const id="dl_8bbd38868a354506b229";
export const url=new URL("../icons/person-simple-bold.svg?v=9922ef2190769924b1455727b8dc2250bde682a0c224871b40e10d69577cefd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
