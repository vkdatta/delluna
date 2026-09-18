export const name="volume_down";
export const id="dl_b17ff5f7cd5443f88cb8";
export const url=new URL("../icons/volume_down.svg?v=74587ba3de48ace9abd1880fbc06df66b435cbb3708503ba10ca3e569ee0cb61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
