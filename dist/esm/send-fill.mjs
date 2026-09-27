export const name="send-fill";
export const id="dl_04033b2d82bf1dc5510f";
export const url=new URL("../icons/send-fill.svg?v=02c69fe08575f90ac6a935fad147dd645ec163902a72721d56f360db9bda4f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
