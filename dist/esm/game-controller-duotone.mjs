export const name="game-controller-duotone";
export const id="dl_6801c79a2061421997f2";
export const url=new URL("../icons/game-controller-duotone.svg?v=fbd9f7b89b4821efbce92a466a0dabe273d8af5ac7ee9de6675e32e2edc2cd01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
