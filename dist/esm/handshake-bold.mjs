export const name="handshake-bold";
export const id="dl_b62021f0f56b4321aef2";
export const url=new URL("../icons/handshake-bold.svg?v=72b05183d2fdd2d32b24f5253cedec5c33be7887de1b423d47fecd362e94980e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
