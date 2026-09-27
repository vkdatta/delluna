export const name="television-simple-thin";
export const id="dl_3a466e0bb74fc1412c8b";
export const url=new URL("../icons/television-simple-thin.svg?v=3a287f7837bdc7f1df5593fab8ae2ab2490dc576c1841688593156505e83d684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
