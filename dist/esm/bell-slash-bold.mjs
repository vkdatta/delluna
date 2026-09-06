export const name="bell-slash-bold";
export const id="dl_a69c8ab8d84948769049";
export const url=new URL("../icons/bell-slash-bold.svg?v=42a3eb481b1189fddc56f95c48e406414616f8cb7084ec867e1f4fbd9d2056f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
