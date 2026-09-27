export const name="terminal-light";
export const id="dl_0d8a872fddb615d74da0";
export const url=new URL("../icons/terminal-light.svg?v=f0938e9ef750225f4e19373492c6ef5051c389b707c2e44caf78f7a44d5feb79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
