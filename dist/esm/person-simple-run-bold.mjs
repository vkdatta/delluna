export const name="person-simple-run-bold";
export const id="dl_b8846ba6eb314ecdabbc";
export const url=new URL("../icons/person-simple-run-bold.svg?v=95a9d340ed81a7f7dc07ea22be747922edc97ecd893a4d7e86871cb3b48c6c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
