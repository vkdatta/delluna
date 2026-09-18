export const name="in_home_mode-fill";
export const id="dl_6f6502fbf2ff449f89e0";
export const url=new URL("../icons/in_home_mode-fill.svg?v=1c0b533a72d875382504f9f820ca62aeb6f751bd1b423c2c982259d850cb3364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
