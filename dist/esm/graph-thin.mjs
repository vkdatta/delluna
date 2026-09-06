export const name="graph-thin";
export const id="dl_18681c065f1e4e848100";
export const url=new URL("../icons/graph-thin.svg?v=eb6f3539276bf9c582eecccf523a52b01b6a842637fcbe1b6bd16051265180ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
