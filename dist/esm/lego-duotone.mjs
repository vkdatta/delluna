export const name="lego-duotone";
export const id="dl_bfdb6e33a85443c490d6";
export const url=new URL("../icons/lego-duotone.svg?v=238d3747a9816d630d16396a816e348185e8d0cac94f598702971340e1f11736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
