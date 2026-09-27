export const name="shovel-bold";
export const id="dl_0bf6d93ea04ae05feafc";
export const url=new URL("../icons/shovel-bold.svg?v=c22ecd5187ea311db4a913ea7c4eb4139115e929a8c0488048b240e5f0d14aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
