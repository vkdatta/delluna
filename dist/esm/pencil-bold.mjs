export const name="pencil-bold";
export const id="dl_050ce0ff9ec84d1c90f7";
export const url=new URL("../icons/pencil-bold.svg?v=45f60a0fde3c3c86e34c444d3a54db6ffb987f2e153f49c27e3970e8d460eeb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
