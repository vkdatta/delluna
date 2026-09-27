export const name="roller_shades";
export const id="dl_9fac4a28b670dc92edfd";
export const url=new URL("../icons/roller_shades.svg?v=aefc1d8972d206fc3f0f7c8694d6c3de791663a09cc4b3c98808bf8696e2ec19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
