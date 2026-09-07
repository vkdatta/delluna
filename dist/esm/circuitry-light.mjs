export const name="circuitry-light";
export const id="dl_a6d2c1602f3b4d56951f";
export const url=new URL("../icons/circuitry-light.svg?v=0affec08f748384b881bb22aba5c3e94bda88ea2dc8f35618ad6d3847015830f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
