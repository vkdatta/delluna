export const name="list-numbers-thin";
export const id="dl_1fe844121fb54f22b1b7";
export const url=new URL("../icons/list-numbers-thin.svg?v=904a94fbc471275299a42341f3bc8272767a7cd4e045ab0776ad23e3927fc964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
