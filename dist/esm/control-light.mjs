export const name="control-light";
export const id="dl_e7be039089a548f183d8";
export const url=new URL("../icons/control-light.svg?v=dbc2162cb88fff3dccb4a0e37856e398d7f6859590248ba63f64cb3d1c8307b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
