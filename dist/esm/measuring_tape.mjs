export const name="measuring_tape";
export const id="dl_790568c1e41e4578a958";
export const url=new URL("../icons/measuring_tape.svg?v=89ef057e6dde89164b40c62e6ca6c4f1af754fa202807ce6ff57d70643f8002d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
