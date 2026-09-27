export const name="chess_queen";
export const id="dl_c49be14f854e95961575";
export const url=new URL("../icons/chess_queen.svg?v=4495b43e3709da88332f4b4e7ecfef0c2407d250e2c44ed82cadf6ce201337f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
