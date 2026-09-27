export const name="airplane-taxiing-thin";
export const id="dl_11119ecfaa504dd98eba";
export const url=new URL("../icons/airplane-taxiing-thin.svg?v=eed1a6dd1b35a52fe51198d470ba52d90971fe7f1c2745a73665739777cf8f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
