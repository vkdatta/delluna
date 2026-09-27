export const name="dice-two-duotone";
export const id="dl_b06d0e9353764791b915";
export const url=new URL("../icons/dice-two-duotone.svg?v=895c374f34216ec816ba2c29823b6ec0afc84220f7e26c1aed8279a84bf3a6de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
