export const name="hand-waving-duotone";
export const id="dl_99b61f1f274b41e2962f";
export const url=new URL("../icons/hand-waving-duotone.svg?v=3c218b4b7e1ea7d17ead2d61a9eedda69c0136c48fc7c54419b791c37cf1a34e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
