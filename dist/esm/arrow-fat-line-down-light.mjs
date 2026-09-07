export const name="arrow-fat-line-down-light";
export const id="dl_e4f57b8d11e14ae7a871";
export const url=new URL("../icons/arrow-fat-line-down-light.svg?v=1565af269be798360dbfe85a754a35561562d530aba6a4fc613d176955ad47d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
