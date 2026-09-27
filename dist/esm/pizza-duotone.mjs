export const name="pizza-duotone";
export const id="dl_9d2e94f5eca14fdd8fe4";
export const url=new URL("../icons/pizza-duotone.svg?v=b2fd8ca1d7fe5ec8a319008593bd06a8e9b6ad7474ac92932df53fb8e5b75706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
